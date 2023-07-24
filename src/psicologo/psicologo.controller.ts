import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PsicologoService } from './psicologo.service';
import { CreatePsicologoDto } from './dto/create-psicologo.dto';
import { UpdatePsicologoDto } from './dto/update-psicologo.dto';

@Controller('psicologo')
export class PsicologoController {
  constructor(private readonly psicologoService: PsicologoService) { }

  @Post()
  create(@Body() createPsicologoDto: CreatePsicologoDto) {
    return this.psicologoService.create(createPsicologoDto);
  }

  @Get(':email')
  findByEmail(@Param('email') email: string) {
    return this.psicologoService.findByEmail(email);
  }

}
