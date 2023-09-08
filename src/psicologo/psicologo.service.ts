import { Injectable } from '@nestjs/common';
import { CreatePsicologoDto } from './dto/create-psicologo.dto';
import { UpdatePsicologoDto } from './dto/update-psicologo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PsicologoService {
  constructor(private prisma: PrismaService) {}

  create(createPsicologoDto: CreatePsicologoDto) {
    const { email, nome, ativo, sobrenome, urlFoto, approach } =
      createPsicologoDto;

    const data: Prisma.PsicologoCreateInput = {
      approach,
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
    return this.prisma.psicologo.create({ data });
  }

  findAll() {
    return this.prisma.psicologo.findMany({ include: { user: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} psicologo`;
  }

  update(id: number, updatePsicologoDto: UpdatePsicologoDto) {
    return this.prisma.psicologo.update({
      data: updatePsicologoDto,
      where: { id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} psicologo`;
  }
}
