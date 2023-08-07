import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PsicologoModule } from './psicologo/psicologo.module';
import { UserModule } from './user/user.module';
import { PacienteModule } from './paciente/paciente.module';
import { RpdModule } from './rpd/rpd.module';
import { HumorModule } from './humor/humor.module';
import { SentimentoModule } from './sentimento/sentimento.module';
import { FisiologiaModule } from './fisiologia/fisiologia.module';

@Module({
  imports: [PrismaModule, PsicologoModule, UserModule, PacienteModule, RpdModule, HumorModule, SentimentoModule, FisiologiaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
