import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const IS_HTTPS = false

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use((req, res, next) => {
    console.log(req.method)
    next()
  })
  app.enableCors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    credentials: IS_HTTPS,
  })
  await app.listen(4000);
}
bootstrap();
