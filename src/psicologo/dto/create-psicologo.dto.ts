import { Prisma } from '@prisma/client'
import { IsOptional, IsString } from 'class-validator';

export interface iUser {
    email: string,
    password: string,
    nome: string,
    data: Date
}

export class CreatePsicologoDto {
    @IsOptional()
    @IsString()
    approach?: string;

    user: iUser;

    @IsOptional()
    paciente?: Prisma.PacienteCreateNestedManyWithoutPsicologoInput;
}
