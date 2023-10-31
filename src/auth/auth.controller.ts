import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/dto/createUserDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async signin(
    @Body('username') username: string,
    @Body('password') password: string,
    @Res() res: Response,
  ) {
    const user = await this.authService.findUser(username, password);
    if (user) {
      const accessToken = this.authService.generateAccessToken(user.username); // Generate access token
      this.authService.setAccessTokenCookie(res, accessToken); // Set access token as a cookie
      return res.json({ 
        message: 'Signin successful',
        accessToken
     });
    } else {
      return res.json({ message: 'Invalid credentials' });
    }
  }

  @Post('signup')
  async register(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    try {
      // Call the AuthService's register method to handle the registration process
      const newUser = await this.authService.register(createUserDto);
      return res.status(HttpStatus.CREATED).json({ message: 'Signup successful', user: newUser });
    } catch (error) {
      return error.message
    }
  }
  
  @Post('signout')
  async signout(@Res() res: Response) {
    await this.authService.clearAccessTokenCookie(res); // Clear access token cookie
    return res.json({ message: 'Signout successful' });
  }
}