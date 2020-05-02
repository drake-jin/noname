import {
  Controller,
  Get,
} from '@nestjs/common';

import AuthService from './auth.service'


@Controller('/auth')
export default class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get()
  getAuth(): string {
    return this.authService.getHello();
  }
}
