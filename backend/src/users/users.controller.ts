import { Controller, Get, Put, Delete, Body, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UpdateProfileDto } from './dto/update-profile.dto';

@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @ApiOperation({ summary: 'Get current user' })
  @ApiResponse({ status: 200, description: 'User found' })
  async getMe(@Request() req) {
    return this.usersService.findById(req.user.id);
  }

  @Put('me/profile')
  @ApiOperation({ summary: 'Update user profile' })
  @ApiResponse({ status: 200, description: 'Profile updated' })
  async updateProfile(@Request() req, @Body() updateProfileDto: UpdateProfileDto) {
    return this.usersService.updateProfile(req.user.id, updateProfileDto);
  }

  @Delete('me')
  @ApiOperation({ summary: 'Delete user account (GDPR)' })
  @ApiResponse({ status: 200, description: 'Account deleted' })
  async deleteAccount(@Request() req) {
    return this.usersService.deleteUser(req.user.id);
  }

  @Get('me/export')
  @ApiOperation({ summary: 'Export user data (GDPR)' })
  @ApiResponse({ status: 200, description: 'Data exported' })
  async exportData(@Request() req) {
    return this.usersService.exportUserData(req.user.id);
  }
}
