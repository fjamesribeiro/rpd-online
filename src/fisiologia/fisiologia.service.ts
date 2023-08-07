import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFisiologiaDto } from './dto/create-fisiologia.dto';
import { UpdateFisiologiaDto } from './dto/update-fisiologia.dto';

@Injectable()
export class FisiologiaService {

  constructor(private prisma: PrismaService) { }

  create(createFisiologiaDto: CreateFisiologiaDto) {
    return 'This action adds a new fisiologia';
  }

  findAll() {
    return this.prisma.fisiologia.findMany();
  }

  findOne(id: number) {
    return this.prisma.fisiologia.findUnique({ where: { id } });
  }

  update(id: number, updateFisiologiaDto: UpdateFisiologiaDto) {
    return `This action updates a #${id} fisiologia`;
  }

  remove(id: number) {
    return `This action removes a #${id} fisiologia`;
  }
}
