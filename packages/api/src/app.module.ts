import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import DomainsModule from '~/domains/module'
import { DetectUserAgentMiddleware } from './app.middleware'

import { TypeOrmModule } from '@nestjs/typeorm';
import typeromConfig from './config/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeromConfig),
    DomainsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DetectUserAgentMiddleware).forRoutes('/');
  }
}
