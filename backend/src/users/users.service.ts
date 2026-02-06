import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserStatus } from './user.entity';
import { Profile } from './profile.entity';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['profile', 'roles'],
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async updateProfile(userId: string, updateProfileDto: UpdateProfileDto) {
    const profile = await this.profileRepository.findOne({
      where: { user_id: userId },
    });

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    Object.assign(profile, updateProfileDto);
    const updatedProfile = await this.profileRepository.save(profile);

    return updatedProfile;
  }

  async deleteUser(userId: string) {
    const user = await this.findById(userId);

    user.status = UserStatus.DELETED;
    user.email = `deleted_${Date.now()}@deleted.com`;
    await this.userRepository.save(user);

    await this.profileRepository.delete({ user_id: userId });

    return { status: 'account_deleted' };
  }

  async exportUserData(userId: string) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['profile', 'roles', 'challenges', 'check_ins'],
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const exportData = {
      user: {
        id: user.id,
        email: user.email,
        created_at: user.created_at,
        profile: user.profile,
      },
      challenges: user.challenges,
      check_ins: user.check_ins,
    };

    return exportData;
  }
}
