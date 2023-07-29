import { Injectable } from '@nestjs/common';
import { CreatePsicologoDto } from './dto/create-psicologo.dto';
import { UpdatePsicologoDto } from './dto/update-psicologo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PsicologoService {
  constructor(private prisma: PrismaService) { }


  create(createPsicologoDto: CreatePsicologoDto) {
    return this.prisma.psicologo.create({
      data: {
        ...createPsicologoDto,
        user: {
          create: {
            ...createPsicologoDto.user,
          }
        }
      }
    })
  }

  findAll() {
    return this.prisma.psicologo.findMany({ include: { user: true } })
  }

  findOne(id: number) {
    return `This action returns a #${id} psicologo`;
  }

  update(id: number, updatePsicologoDto: UpdatePsicologoDto) {
    return `This action updates a #${id} psicologo`;
  }

  remove(id: number) {
    return `This action removes a #${id} psicologo`;
  }
}
