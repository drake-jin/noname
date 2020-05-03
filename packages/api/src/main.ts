import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const IS_HTTPS = false

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: /(localhost:3000)/g,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
    credentials: IS_HTTPS,
  })
  await app.listen(4000);
}
bootstrap();
