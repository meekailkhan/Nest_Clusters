import { NestFactory } from '@nestjs/core';
import { Service3Module } from './service3.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  const app = await NestFactory.create(Service3Module);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true,
      transform:true,
      disableErrorMessages : false,
      validationError : {
        target : false,
        value :false
      }
    })
  )

  await app.listen(6000);
}
bootstrap();
