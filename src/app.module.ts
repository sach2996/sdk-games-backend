import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeController } from './home/home.controller';
import { HomeService } from './home/home.service';
import { UsersController } from './users/user.controller';
import { UserService } from './users/user.service';
import { HomeModule } from './home/home.module';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [HomeModule, UserModule, AuthModule],
  controllers: [AppController, HomeController, UsersController],
  providers: [AppService, HomeService, UserService],
})
export class AppModule {}
