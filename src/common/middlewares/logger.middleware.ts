import { Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { LogShippingService } from 'src/logger/logshipping.service';

export class LoggerMiddleware implements NestMiddleware {
  private logger: Logger | LogShippingService = new Logger('HTTP');

  constructor() {}

  use(request: Request | any, response: Response | any, next: NextFunction): void {
    response.on('finish', () => {
      // Request
      const { method, path: url, user } = request;
      const ip = request.get('X-Forwarded-For');
      const userAgent = request.get('user-agent') || '';

      // Response
      const { statusCode, rtime } = response;

      this.logger.log({
        method,
        url: url || '/',
        endpoints: `${method} ${url || '/'}`,
        statusCode,
        userAgent,
        ip,
        user,
        rtime: Date.now() - rtime,
      });
    });

    next();
  }
}
