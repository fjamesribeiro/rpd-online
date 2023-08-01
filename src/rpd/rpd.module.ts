import { Module } from '@nestjs/common';
import { RpdService } from './rpd.service';
import { RpdController } from './rpd.controller';

@Module({
  controllers: [RpdController],
  providers: [RpdService]
})
export class RpdModule {}
