import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './utils/google.strategy';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '../user/user.module';
import { SessionSerializer } from './utils/serializer';

@Module({
  imports: [ConfigModule.forRoot(), UserModule],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, SessionSerializer],
})
export class AuthModule {}
