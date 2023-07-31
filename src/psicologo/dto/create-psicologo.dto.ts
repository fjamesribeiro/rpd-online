import { Prisma } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from '../../user/dto/create-user.dto';

export class CreatePsicologoDto extends CreateUserDto {
  @IsOptional()
  @IsString()
  approach?: string;
}
