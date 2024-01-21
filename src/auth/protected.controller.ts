// your-protected.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('protected')
@UseGuards(AuthGuard('jwt'))
export class ProtectedController {
  @Get()
  getProtectedData() {
    return 'This route is protected!';
  }
}
