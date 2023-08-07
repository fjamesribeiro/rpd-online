import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FisiologiaService } from './fisiologia.service';
import { CreateFisiologiaDto } from './dto/create-fisiologia.dto';
import { UpdateFisiologiaDto } from './dto/update-fisiologia.dto';

@Controller('fisiologia')
export class FisiologiaController {
  constructor(private readonly fisiologiaService: FisiologiaService) {}

  @Post()
  create(@Body() createFisiologiaDto: CreateFisiologiaDto) {
    return this.fisiologiaService.create(createFisiologiaDto);
  }

  @Get()
  findAll() {
    return this.fisiologiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fisiologiaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFisiologiaDto: UpdateFisiologiaDto) {
    return this.fisiologiaService.update(+id, updateFisiologiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fisiologiaService.remove(+id);
  }
}
