import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';

@Module({})
export class HomeModule {
  controllers: [HomeController];
  providers: [HomeService];
  exports: [HomeService];
}
