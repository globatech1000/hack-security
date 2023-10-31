// app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserEntity } from '../entity/user.entity';
import { LocalStrategy } from './local.strategy';
import { UserRepository } from 'src/user/user.repository';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, UserRepository ]),
    JwtModule.register({
      secret: 'secret', // Replace with your actual secret key
      signOptions: { expiresIn: '1h' }, //  Token expires in 1 hour
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    UserModule
  ],
  controllers:[AuthController],
  providers: [AuthService, LocalStrategy, UserService], // Include the LocalStrategy
})
export class AuthModule {}
