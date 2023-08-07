import { Injectable } from '@nestjs/common';
import { CreateSentimentoDto } from './dto/create-sentimento.dto';
import { UpdateSentimentoDto } from './dto/update-sentimento.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SentimentoService {

  constructor(private prisma: PrismaService) { }

  create(createSentimentoDto: CreateSentimentoDto) {
    return 'This action adds a new sentimento';
  }

  findAll() {
    return this.prisma.sentimento.findMany({ include: { humorSentimento: true } })
  }

  findSentimentoByHumor(idHumor: number) {
    return this.prisma.sentimento.findMany({ include: { humorSentimento: true } })
  }

  findOne(id: number) {
    return `This action returns a #${id} sentimento`;
  }

  update(id: number, updateSentimentoDto: UpdateSentimentoDto) {
    return `This action updates a #${id} sentimento`;
  }

  remove(id: number) {
    return `This action removes a #${id} sentimento`;
  }
}
