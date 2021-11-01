import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('delete')
  getDelete(): string {
    return this.appService.getDelete();
  }
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
