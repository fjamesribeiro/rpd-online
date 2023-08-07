import { Prisma } from '@prisma/client';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateRpdDto implements Prisma.RpdCreateInput {
  data: string | Date;
  situacao: string;
  comportamento: string;
  pensamento?: Prisma.PensamentoCreateNestedManyWithoutRpdInput;
  paciente: Prisma.PacienteCreateNestedOneWithoutRpdInput;
  humor: Prisma.HumorCreateNestedOneWithoutRpdInput;
  sentimento?: Prisma.RpdSentimentoCreateNestedManyWithoutRpdInput;
  fisiologia?: Prisma.RpdFisiologiaCreateNestedManyWithoutRpdInput;

  //   @IsString()
  //   @IsNotEmpty()
  //   situacao: string;

  //   @IsDate()
  //   // @IsNotEmpty()
  //   @IsOptional()
  //   data?: Date;

  //   @IsString()
  //   @IsNotEmpty()
  //   comportamento: string;

  //   @IsOptional()
  //   humor: number;

  //   @IsNotEmpty()
  //   @IsNumber()
  //   pacienteId: number;

  //   @IsOptional()
  //   pensamento?: String[];

  //   @IsOptional()
  //   sentimento?: number[];

  //   @IsOptional()
  //   fisiologia?: number[];
}
