// src/user/user.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

import { UserEntity } from 'src/entity/user.entity';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() userDto: UserEntity): Promise<UserEntity> {
    return this.userService.create(userDto);
  }
}
