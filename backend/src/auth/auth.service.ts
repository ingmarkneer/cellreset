import { Injectable, UnauthorizedException, ConflictException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { User, UserStatus } from '../users/user.entity';
import { Profile } from '../users/profile.entity';
import { Role } from './role.entity';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { email, password, consent } = registerDto;

    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    if (!consent?.terms || !consent?.privacy) {
      throw new BadRequestException('Terms and privacy consent required');
    }

    const password_hash = await bcrypt.hash(password, 12);
    const email_verification_token = uuidv4();

    const participantRole = await this.roleRepository.findOne({ where: { name: 'participant' } });
    if (!participantRole) {
      throw new Error('Participant role not found');
    }

    const user = this.userRepository.create({
      email,
      password_hash,
      email_verification_token,
      email_verified: false,
      status: UserStatus.ACTIVE,
      roles: [participantRole],
    });

    const savedUser = await this.userRepository.save(user);

    const profile = this.profileRepository.create({
      user_id: savedUser.id,
      user: savedUser,
    });
    await this.profileRepository.save(profile);

    return {
      user_id: savedUser.id,
      email: savedUser.email,
      status: 'pending_verification',
    };
  }

  async verifyEmail(email: string, code: string) {
    const user = await this.userRepository.findOne({
      where: { email, email_verification_token: code },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid verification code');
    }

    user.email_verified = true;
    user.email_verification_token = null;
    await this.userRepository.save(user);

    const tokens = await this.generateTokens(user);

    return {
      status: 'verified',
      ...tokens,
      user: this.sanitizeUser(user),
    };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({
      where: { email },
      relations: ['roles', 'profile'],
    });

    if (!user) {
      return null;
    }

    if (!user.email_verified) {
      throw new UnauthorizedException('Email not verified');
    }

    if (user.status !== UserStatus.ACTIVE) {
      throw new UnauthorizedException('Account is blocked or deleted');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return null;
    }

    return user;
  }

  async login(user: User) {
    const tokens = await this.generateTokens(user);

    return {
      ...tokens,
      user: this.sanitizeUser(user),
    };
  }

  async generateTokens(user: User) {
    const payload = {
      sub: user.id,
      email: user.email,
      roles: user.roles.map((r) => r.name),
    };

    const access_token = this.jwtService.sign(payload);

    return {
      access_token,
      refresh_token: access_token,
    };
  }

  private sanitizeUser(user: User) {
    const { password_hash, email_verification_token, password_reset_token, ...sanitized } = user;
    return sanitized;
  }

  async forgotPassword(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      return { status: 'reset_link_sent' };
    }

    const password_reset_token = uuidv4();
    const password_reset_expires = new Date(Date.now() + 3600000);

    user.password_reset_token = password_reset_token;
    user.password_reset_expires = password_reset_expires;
    await this.userRepository.save(user);

    return { status: 'reset_link_sent' };
  }

  async resetPassword(token: string, new_password: string) {
    const user = await this.userRepository.findOne({
      where: { password_reset_token: token },
    });

    if (!user || !user.password_reset_expires || user.password_reset_expires < new Date()) {
      throw new UnauthorizedException('Invalid or expired reset token');
    }

    const password_hash = await bcrypt.hash(new_password, 12);
    user.password_hash = password_hash;
    user.password_reset_token = null;
    user.password_reset_expires = null;
    await this.userRepository.save(user);

    return { status: 'password_reset' };
  }
}
