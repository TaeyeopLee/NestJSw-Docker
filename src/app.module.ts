import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { LoggerModule } from './logger/logshipping.module';
import { LogShippingService } from './logger/logshipping.service';

@Module({
  imports: [LoggerModule],
  controllers: [AppController],
  providers: [AppService, LogShippingService],
})
export class AppModule implements NestModule {
  configure (consumer: MiddlewareConsumer) {
    consumer.apply(
      LoggerMiddleware
    ).forRoutes("*");
  }
}
