import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, } from "class-validator";

export class CreateRpdDto {
    @IsString()
    @IsNotEmpty()
    situacao: string;

    @IsDate()
    // @IsNotEmpty()
    @IsOptional()

    data?: Date

    @IsString()
    @IsNotEmpty()
    comportamento: string;

    @IsOptional()
    pensamento?: String[]

    @IsNotEmpty()
    @IsNumber()
    pacienteId: number;

    @IsOptional()
    humor?: number[];

    @IsOptional()
    sentimento?: number[];

    @IsOptional()
    fisiologia?: number[];
}
