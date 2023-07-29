import { Module } from '@nestjs/common';
import { PsicologoService } from './psicologo.service';
import { PsicologoController } from './psicologo.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PsicologoController],
  providers: [PsicologoService, PrismaService]
})
export class PsicologoModule { }
