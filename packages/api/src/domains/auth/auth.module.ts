import { Module, HttpModule } from '@nestjs/common';

import AuthController from './auth.controller'
import AuthService from './auth.service'
import AuthBO from './auth.bo'
import { JwtModule } from '@nestjs/jwt'


@Module({
  imports: [
    HttpModule,
    JwtModule.register({ secret: '' }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthBO],
  exports: [AuthService],
})
export default class AuthModule { }
