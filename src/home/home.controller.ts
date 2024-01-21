import { Controller, Get, UseGuards } from '@nestjs/common';
import { HomeService } from './home.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('home')
// @UseGuards(AuthGuard('jwt'))
export class HomeController {
  constructor(private service: HomeService) {}

  @Get()
  async home() {
    return this.service.getHome();
  }
}
