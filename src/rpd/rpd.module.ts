import { Module } from '@nestjs/common';
import { RpdService } from './rpd.service';
import { RpdController } from './rpd.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RpdController],
  providers: [RpdService, PrismaService]
})
export class RpdModule { }
