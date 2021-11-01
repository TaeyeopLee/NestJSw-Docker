import { Injectable } from '@nestjs/common';
import { LogShippingService } from '../src/logger/logshipping.service'
@Injectable()
export class AppService {
  private logger = new LogShippingService();
  
  getHello(): string {
    this.logger.log("log log log");
    console.log("openapi openapiopenapiopenapi")
    return (JSON.stringify({ success: true, data: "Hello world" }));
  }
  getDelete(): string {
    this.logger.log("Deleted Deleted Deleted");
    return 'Deleted !';
  }
}
