import { Injectable } from '@nestjs/common';
import { CreateRpdDto } from './dto/create-rpd.dto';
import { UpdateRpdDto } from './dto/update-rpd.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RpdService {

  constructor(private prisma: PrismaService) { }

  create(createRpdDto: CreateRpdDto) {

    const { comportamento, data, situacao, pacienteId } = createRpdDto;

    const paciente = this.prisma.paciente.findUnique({ where: { id: pacienteId } })

    if (!paciente) {
      throw new Error(`Paciente de id ${pacienteId} não encontrado`)
    }

    const dataCreate: Prisma.RpdCreateInput = {
      comportamento, situacao, data: new Date,
      paciente: { connect: { id: pacienteId } },
      humor: { connect: { id: 1 } },
      fisiologia: {
        createMany: { data: [{ idFisiologia: 1 }, { idFisiologia: 2 }] }
      },
      sentimento: {
        createMany: { data: [{ idSentimento: 20 }, { idSentimento: 30 }, { idSentimento: 35 }] }
      },
      pensamento: {
        createMany: { data: [{ texto: "Pensamento1" }, { texto: "Pensamento2" }] }
      }
    }

    return this.prisma.rpd.create({ data: dataCreate });
  }


  findAll() {
    return this.prisma.rpd.findMany({ include: { paciente: { select: { user: { select: { nome: true } } } }, humor: { select: { texto: true } }, fisiologia: { select: { fsiologia: { select: { texto: true } } } }, pensamento: true, sentimento: { select: { sentimento: { select: { texto: true } } } } } });
  }

  findOne(id: number) {
    return this.prisma.rpd.findUnique({ where: { id }, include: { paciente: { select: { user: { select: { nome: true } } } }, humor: { select: { texto: true } }, fisiologia: { select: { fsiologia: { select: { texto: true } } } }, pensamento: true, sentimento: { select: { sentimento: { select: { texto: true } } } } } })
  }

  update(id: number, updateRpdDto: UpdateRpdDto) {
    return `This action updates a #${id} rpd`;
  }

  remove(id: number) {
    return this.prisma.rpd.delete({ where: { id }, include: { fisiologia: true } })
  }
}
