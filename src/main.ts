import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import axios from "axios";
// import logger from "./logger";
import morgan from "morgan";
import { AppModule } from './app.module';
import { LogShippingService } from './logger/logshipping.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });
  app.useLogger(app.get(LogShippingService));
  await app.listen(16000);
  console.log(`Application is running at ${await app.getUrl()}`);
}

bootstrap().then((res) => {
  const instance = axios.create();
  instance
  .get("http://localhost:16000")
  .then((res) => {console.log(res.data)})
  .catch((e) => {
    console.error(e.response.data);
  })
});
