import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Req,

  BadRequestException,
} from '@nestjs/common';

import AuthService from './auth.service'
import { TokenDTO } from './auth.dto'

@Controller('/auth')
export default class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get("sso/:provider")
  getProvider(
    @Param('provider') provider: string,
  ): string {
    const providers = ['google', 'github', 'facebook']
    if (providers.includes(provider)) {
      return this.authService.getRedirectURL(provider);
    }
    throw new BadRequestException()
  }

  //   @Post("sso/:provider")
  //   postProvider(
  //     @Param('provider') provider: string,
  //     @Body() do: TokenDTO,
  //   @Req() req: Request,
  //   ): Promise<void> {
  //   const providers = ['google', 'github', 'facebook']
  //     if(providers.includes(provider)) {
  //   return this.authService.isSigned(provider, do, req);
  // }
  // throw new BadRequestException()
  //   }
  @Post("sso/:provider")
  postProvider(@Param('provider') provider: string, @Body() dto: TokenDTO): Promise<void> {
    const providers = ['google', 'github', 'facebook']
    if (providers.includes(provider)) {
      return this.authService.isSigned(provider, dto)
    }
    throw new BadRequestException()
  }
}
