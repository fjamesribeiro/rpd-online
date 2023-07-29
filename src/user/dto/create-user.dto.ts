import { Prisma } from "@prisma/client";
import { IsEmail, IsOptional, IsString } from "class-validator";


export class CreateUserDto implements Prisma.UserCreateInput {
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    nome: string;

    @IsOptional()
    data: string | Date;

    @IsOptional()
    psicologo?: Prisma.PsicologoCreateNestedOneWithoutUserInput;

    @IsOptional()
    paciente?: Prisma.PacienteCreateNestedOneWithoutUserInput;
}
