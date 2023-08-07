import { Module } from '@nestjs/common';
import { HumorService } from './humor.service';
import { HumorController } from './humor.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [HumorController],
  providers: [HumorService, PrismaService]
})
export class HumorModule { }
