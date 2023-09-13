import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Injectable()
export class PacienteService {
  constructor(private prisma: PrismaService) { }

  async create(createPacienteDto: CreatePacienteDto) {
    const { email, nome, psicologoId, ativo, sobrenome, urlFoto } =
      createPacienteDto;

    const psicologo = await this.prisma.psicologo.findUnique({
      where: { id: psicologoId },
    });

    if (!psicologo) {
      throw new Error(`Psicologo de id ${psicologoId} não cadastrado`);
    }

    const data: Prisma.PacienteCreateInput = {
      psicologo: {
        connect: { id: psicologoId },
      },
      user: {
        create: {
          nome,
          sobrenome,
          urlFoto,
          ativo,
          email,
        },
      },
    };

    return this.prisma.paciente.create({ data });
  }

  findAll() {
    return this.prisma.paciente.findMany({ include: { user: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} paciente`;
  }

  findbyPsicologo(id: number) {
    return this.prisma.paciente.findMany({ where: { psicologoId: id } })
  }

  async update(id: number, updatePacienteDto: UpdatePacienteDto) {
    return await this.prisma.paciente.update({
      data: updatePacienteDto,
      where: { id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} paciente`;
  }
}
