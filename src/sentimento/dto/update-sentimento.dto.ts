import { PartialType } from '@nestjs/mapped-types';
import { CreateSentimentoDto } from './create-sentimento.dto';

export class UpdateSentimentoDto extends PartialType(CreateSentimentoDto) {}
