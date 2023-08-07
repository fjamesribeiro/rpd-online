import { Module } from '@nestjs/common';
import { FisiologiaService } from './fisiologia.service';
import { FisiologiaController } from './fisiologia.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FisiologiaController],
  providers: [FisiologiaService, PrismaService]
})
export class FisiologiaModule { }
