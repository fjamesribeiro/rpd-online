import { PartialType } from '@nestjs/mapped-types';
import { CreateRpdDto } from './create-rpd.dto';

export class UpdateRpdDto extends PartialType(CreateRpdDto) {}
