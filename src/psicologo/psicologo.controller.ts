import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PsicologoService } from './psicologo.service';
import { CreatePsicologoDto } from './dto/create-psicologo.dto';
import { UpdatePsicologoDto } from './dto/update-psicologo.dto';

@Controller('psicologo')
export class PsicologoController {
  constructor(private readonly psicologoService: PsicologoService) { }

  @Post()
  create(@Body() createPsicologoDto: CreatePsicologoDto) {
    console.log(createPsicologoDto);
    return this.psicologoService.create({ ...createPsicologoDto });
  }

  @Get()
  findAll() {
    return this.psicologoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.psicologoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePsicologoDto: UpdatePsicologoDto) {
    return this.psicologoService.update(+id, updatePsicologoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.psicologoService.remove(+id);
  }
}
