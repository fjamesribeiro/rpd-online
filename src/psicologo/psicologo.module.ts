import { Module } from '@nestjs/common';
import { PsicologoService } from './psicologo.service';
import { PsicologoController } from './psicologo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PsicologoController],
  providers: [PsicologoService]
})
export class PsicologoModule { }
