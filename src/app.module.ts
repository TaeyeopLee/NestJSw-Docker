import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { LoggerModule } from './logger/logshipping.module';
import { LogShippingService } from './logger/logshipping.service';
import { TestModule } from './test/test.module';
import { TestService } from './test/test.service';

@Module({
  imports: [LoggerModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure (consumer: MiddlewareConsumer) {
    consumer.apply(
      LoggerMiddleware
    ).forRoutes("*");
  }
}
