import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SentimentoService } from './sentimento.service';
import { CreateSentimentoDto } from './dto/create-sentimento.dto';
import { UpdateSentimentoDto } from './dto/update-sentimento.dto';

@Controller('sentimento')
export class SentimentoController {
  constructor(private readonly sentimentoService: SentimentoService) {}

  @Post()
  create(@Body() createSentimentoDto: CreateSentimentoDto) {
    return this.sentimentoService.create(createSentimentoDto);
  }

  @Get()
  findAll() {
    return this.sentimentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sentimentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSentimentoDto: UpdateSentimentoDto) {
    return this.sentimentoService.update(+id, updateSentimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sentimentoService.remove(+id);
  }
}
