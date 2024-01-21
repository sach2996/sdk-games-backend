// auth.controller.ts
import { Controller, Post, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req: any): Promise<any> {
    return this.authService.login(req.user);
  }

  @Get('key')
  async generateKey(): Promise<any> {
    return this.authService.generateKey();
  }
}
