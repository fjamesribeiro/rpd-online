import { PartialType } from '@nestjs/mapped-types';
import { CreateFisiologiaDto } from './create-fisiologia.dto';

export class UpdateFisiologiaDto extends PartialType(CreateFisiologiaDto) {}
