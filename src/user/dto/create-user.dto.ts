import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  sobrenome: string;

  @IsOptional()
  @IsString()
  urlFoto: string;

  @IsOptional()
  @IsString()
  ativo: boolean;

  @IsOptional()
  data: string | Date;
}
