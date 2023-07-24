import { Injectable } from '@nestjs/common';
import { CreatePsicologoDto } from './dto/create-psicologo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from "bcrypt";

@Injectable()
export class PsicologoService {
  constructor(private prisma: PrismaService) { }

  async create(createPsicologoDto: CreatePsicologoDto) {
    const data = {
      ...createPsicologoDto,
      password: await bcrypt.hash(createPsicologoDto.password, 10)
    }

    const createPsc = await this.prisma.psicologo.create({
      data
    })
    return { ...createPsc, password: undefined };
  }

  async findByEmail(email: string) {
    return await this.prisma.psicologo.findUnique({ where: { email } })
  }

}
