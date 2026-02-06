import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, IsObject, IsBoolean } from 'class-validator';

class ConsentDto {
  @ApiProperty()
  @IsBoolean()
  terms: boolean;

  @ApiProperty()
  @IsBoolean()
  privacy: boolean;
}

export class RegisterDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'SecurePassword123!', minLength: 8 })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({ type: ConsentDto })
  @IsObject()
  consent: ConsentDto;
}
