import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ServicesModule from '~/services/module'
import { DetectUserAgentMiddleware } from './app.middleware'

@Module({
  imports: [
    ServicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DetectUserAgentMiddleware).forRoutes('/');
  }
}
