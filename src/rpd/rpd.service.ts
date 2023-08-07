import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRpdDto } from './dto/create-rpd.dto';
import { UpdateRpdDto } from './dto/update-rpd.dto';

@Injectable()
export class RpdService {
  constructor(private prisma: PrismaService) {}

  async create(createRpdDto: CreateRpdDto) {
    const { comportamento, data, situacao, pacienteId, humor } = createRpdDto;

    const paciente = await this.prisma.paciente.findUnique({
      where: { id: pacienteId },
    });

    if (!paciente) {
      throw new NotFoundException(
        `Paciente de id ${pacienteId} não encontrado`,
      );
    }

    let json = {
      comportamento,
      situacao,
      data: new Date(),
      paciente: { connect: { id: pacienteId } },
      humor: { connect: { id: humor } },
    };

    if (createRpdDto.fisiologia) {
      let val = [];
      createRpdDto.fisiologia.map((id) => {
        val.push({ idFisiologia: id });
      });
      json['fisiologia'] = {
        createMany: { data: val },
      };
    }

    if (createRpdDto.sentimento) {
      let val = [];
      createRpdDto.sentimento.map(async (id) => {
        val.push({ idSentimento: id });
      });

      json['sentimento'] = {
        createMany: { data: val },
      };
    }

    if (createRpdDto.pensamento) {
      let val = [];
      createRpdDto.pensamento.map((texto) => {
        val.push({ texto: texto });
      });

      json['pensamento'] = {
        createMany: {
          data: val,
        },
      };
    }

    return await this.prisma.rpd.create({ data: createRpdDto });
  }

  findAll() {
    return this.prisma.rpd.findMany({
      include: {
        paciente: { select: { user: { select: { nome: true } } } },
        humor: { select: { texto: true } },
        fisiologia: { select: { fsiologia: { select: { texto: true } } } },
        pensamento: true,
        sentimento: { select: { sentimento: { select: { texto: true } } } },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.rpd.findUnique({
      where: { id },
      include: {
        paciente: { select: { user: { select: { nome: true } } } },
        humor: { select: { texto: true } },
        fisiologia: { select: { fsiologia: { select: { texto: true } } } },
        pensamento: true,
        sentimento: { select: { sentimento: { select: { texto: true } } } },
      },
    });
  }

  update(id: number, updateRpdDto: UpdateRpdDto) {
    return this.prisma.rpd.update({ data: updateRpdDto, where: { id } });
  }

  remove(id: number) {
    return this.prisma.rpd.delete({
      where: { id },
      include: { fisiologia: true },
    });
  }
}
