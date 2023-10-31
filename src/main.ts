// main.ts

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable the ValidationPipe globally
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(1000);
}
bootstrap();
