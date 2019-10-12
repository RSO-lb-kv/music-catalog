import './config';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { ValidationException } from './models/exceptions/validation.exception';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: errors => new ValidationException(errors),
    }),
  );

  await app.listen(process.env.PORT);
}
bootstrap();
