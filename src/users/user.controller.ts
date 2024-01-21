import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
// @UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private service: UserService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post('register')
  async createUser(
    @Req()
    reqBody: any,
  ) {
    const userResponse = await this.service.createUser(reqBody.body);
    return userResponse;
  }

  @Post('login')
  async login(
    @Req()
    reqBody: any,
  ) {
    const userResponse = await this.service.login(reqBody.body);
    return userResponse;
  }
}
