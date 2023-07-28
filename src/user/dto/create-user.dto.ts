import { Prisma } from '@prisma/client';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinDate,
  MinLength,
} from 'class-validator';

export class CreateUserDto implements Prisma.UserCreateInput {
  @IsOptional()
  @MinDate(new Date())
  data: string | Date;

  @IsEmail()
  email: string;

  @IsNumber()
  // @IsOptional()
  // psicologo?: Prisma.UserCreateNestedOneWithoutPsicologoRelationInput;
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  password: string;

  @IsString()
  name: string;
}
