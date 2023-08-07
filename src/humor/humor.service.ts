import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHumorDto } from './dto/create-humor.dto';
import { UpdateHumorDto } from './dto/update-humor.dto';

@Injectable()
export class HumorService {

  constructor(private prisma: PrismaService) { }

  create(createHumorDto: CreateHumorDto) {
    return 'This action adds a new humor';
  }

  findAll() {
    return this.prisma.humor.findMany({ include: { humorSentimento: { select: { sentimento: true } } } });
  }

  findOne(id: number) {
    return this.prisma.humor.findUnique({ where: { id }, include: { humorSentimento: { select: { sentimento: true } } } })
  }

  update(id: number, updateHumorDto: UpdateHumorDto) {
    return `This action updates a #${id} humor`;
  }

  remove(id: number) {
    return `This action removes a #${id} humor`;
  }
}
