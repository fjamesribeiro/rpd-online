import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PsicologoModule } from './psicologo/psicologo.module';
import { UserModule } from './user/user.module';
import { PacienteModule } from './paciente/paciente.module';
import { RpdModule } from './rpd/rpd.module';

@Module({
  imports: [PrismaModule, PsicologoModule, UserModule, PacienteModule, RpdModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
