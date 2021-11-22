import { Controller, Get, Post, Query } from '@nestjs/common';
import { TestService } from './test.service';


@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('delete')
  getDelete(): string {
    return this.testService.getDelete();
  }
  
  @Get()
  getHello(): string {
    return this.testService.getHello();
  }

  @Get('date')
  getTestYYYYMMDD(@Query('date') date): string {
    return this.testService.testDateYYYYMMDD(date);
  }

  @Get('longdate')
  getTestYYYYMMDDHHMMSS(@Query('date') date): string {
    return this.testService.testDateLong(date);
  }

  @Get('longdateOracle')
  getTestYYYYMMDDHHMMSSOracle(@Query('date') date): string {
    return this.testService.testDateLongOracle(date);
  }
}
