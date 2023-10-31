// src/user/user.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { CreateUserDto } from '../dto/createUserDto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(userDto: CreateUserDto): Promise<UserEntity> {
    const newUser = this.userRepository.create(userDto);
    await newUser.hashPassword(); // Hash the user's password
    return this.userRepository.save(newUser);
  }

  async findOne(username: string): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { username } });
  }
}
