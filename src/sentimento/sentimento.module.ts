import { Module } from '@nestjs/common';
import { SentimentoService } from './sentimento.service';
import { SentimentoController } from './sentimento.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SentimentoController],
  providers: [SentimentoService, PrismaService]
})
export class SentimentoModule { }
