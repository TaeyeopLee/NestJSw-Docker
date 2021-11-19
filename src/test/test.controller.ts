import { Controller, Get, Post } from '@nestjs/common';
import { TestService } from './test.service';


@Controller()
export class TestController {
  constructor(private readonly appService: TestService) {}

  @Get('delete')
  getDelete(): string {
    return this.appService.getDelete();
  }
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
