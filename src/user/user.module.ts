// src/user/user.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from '../entity/user.entity';
import { UserRepository } from './user.repository';
import { PassportModule } from '@nestjs/passport';

@Module({
imports: [
    TypeOrmModule.forFeature([UserEntity,UserRepository])], 
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService],   
})
export class UserModule {}
