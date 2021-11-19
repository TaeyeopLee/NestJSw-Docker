import { Injectable } from '@nestjs/common';
import { LogShippingService } from '../src/logger/logshipping.service'
import { TestService } from './test/test.service';
@Injectable()
export class AppService {
  constructor(private readonly testService: TestService) {}
  private logger = new LogShippingService();
  
  getHello(): string {
    this.logger.log("log log log");
    // console.log("openapi openapiopenapiopenapi")
    // return (JSON.stringify({ success: true, data: "Hello world" }));

    let msg = this.testService.getHello();
    return msg;
  }
  getDelete(): string {
    this.logger.log("Deleted Deleted Deleted");
    // return 'Deleted !';
    let msg = this.testService.getDelete();
    return msg;
  }
}
