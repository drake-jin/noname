import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs'
import typeormConfig from '~/config/typeorm'


const IS_HTTPS = false

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    credentials: IS_HTTPS,
  })
  await app.listen(4000);


  fs.writeFileSync('ormconfig.json',
    JSON.stringify(typeormConfig, null, 2)
  );
}
bootstrap();
