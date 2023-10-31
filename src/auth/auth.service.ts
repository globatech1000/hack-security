// auth.service.ts

import { Injectable, Res, HttpException, HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { UserEntity } from '../entity/user.entity'; // Replace 'user.entity' with the path to your User entity
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/dto/createUserDto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async findUser(username: string, password: string): Promise<UserEntity> {
    const user = await this.userService.findOne(username);
    if (user && (await user.comparePassword(password))) {
      return user;
    }
    return null;
  }

  async register(userDto: CreateUserDto) {
    const existingUser = await this.userService.findOne(userDto.username);
    if (existingUser) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const newUser = await this.userService.create(userDto);
    console.log('User registered:', newUser);
    return newUser;
  }

  async signout(@Res() res: Response) {
    this.clearAccessTokenCookie(res); // Clear access token cookie
  }

  public generateAccessToken(userId: string): string {
    const payload = { userId };
    const options = { expiresIn: '1h' }; // Example: Token expires in 1 hour
    return this.jwtService.sign(payload, options);
  }

  public setAccessTokenCookie(res: Response, accessToken: string): void {
    // Set the access token as a cookie
    res.cookie('access_token', accessToken, { httpOnly: true });
    console.log('Access token set', accessToken);
  }

  public clearAccessTokenCookie(res: Response): void {
    // Clear the access token cookie
    res.clearCookie('access_token');
    console.log('Access token cleared');
  }
}


