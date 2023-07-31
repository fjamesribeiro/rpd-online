import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Injectable()
export class PacienteService {
  constructor(private prisma: PrismaService) {}

  async create(createPacienteDto: CreatePacienteDto) {
    const { email, nome, password, psicologoId } = createPacienteDto;

    const psicologo = await this.prisma.psicologo.findUnique({
      where: { id: psicologoId },
    });

    console.log(psicologo);

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
          email,
          password,
          data: new Date(),
        },
      },
    };

    console.log(data);

    return this.prisma.paciente.create({ data });
  }

  findAll() {
    return this.prisma.paciente.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} paciente`;
  }

  update(id: number, updatePacienteDto: UpdatePacienteDto) {
    return `This action updates a #${id} paciente`;
  }

  remove(id: number) {
    return `This action removes a #${id} paciente`;
  }
}
