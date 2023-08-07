import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HumorService } from './humor.service';
import { CreateHumorDto } from './dto/create-humor.dto';
import { UpdateHumorDto } from './dto/update-humor.dto';

@Controller('humor')
export class HumorController {
  constructor(private readonly humorService: HumorService) {}

  @Post()
  create(@Body() createHumorDto: CreateHumorDto) {
    return this.humorService.create(createHumorDto);
  }

  @Get()
  findAll() {
    return this.humorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.humorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHumorDto: UpdateHumorDto) {
    return this.humorService.update(+id, updateHumorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.humorService.remove(+id);
  }
}
