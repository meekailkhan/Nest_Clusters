import { NestFactory } from '@nestjs/core';
import { Service2Module } from './service2.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(Service2Module);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      disableErrorMessages: false,
      validationError: {
        target: false,
        value: false,
      },
    })
  );
  await app.listen(process.env.port ?? 5000);
}
bootstrap();
