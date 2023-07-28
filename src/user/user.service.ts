import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const data: Prisma.UserCreateInput = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
      data: new Date(),
    };

    const createdUser = await this.prisma.user.create({ data });

    return {
      ...createdUser,
      password: undefined,
    };
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error(`User with email ${email} not found`);
    }

    return user;
  }

  async deleteByEmail(email: string) {
    const user = await this.findByEmail(email);

    if (!user) {
      throw new Error(`User with email ${email} not found`);
    }

    return this.prisma.user.delete({ where: { id: user.id } });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findAllPsicologos() {
    return await this.prisma.user.findMany({
      where: { NOT: { psicologoId: null } },
    });
  }

  async findAllPacientes() {
    return await this.prisma.user.findMany({ where: { psicologoId: null } });
  }

  async findPacientesbyPsicologoId(idPsicologo: number) {
    return await this.prisma.user.findMany({
      where: { psicologoId: idPsicologo },
    });
  }
}
