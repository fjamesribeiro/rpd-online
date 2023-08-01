import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RpdService } from './rpd.service';
import { CreateRpdDto } from './dto/create-rpd.dto';
import { UpdateRpdDto } from './dto/update-rpd.dto';

@Controller('rpd')
export class RpdController {
  constructor(private readonly rpdService: RpdService) {}

  @Post()
  create(@Body() createRpdDto: CreateRpdDto) {
    return this.rpdService.create(createRpdDto);
  }

  @Get()
  findAll() {
    return this.rpdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rpdService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRpdDto: UpdateRpdDto) {
    return this.rpdService.update(+id, updateRpdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rpdService.remove(+id);
  }
}
