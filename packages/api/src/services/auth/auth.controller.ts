import {
  Controller,
  Get,
  Param,

  BadRequestException,
} from '@nestjs/common';

import AuthService from './auth.service'

// const CLIENT_ID = "989783283769-arbj3rnjo09k820djnihrh8pgv89bd5o.apps.googleusercontent.com";
// const AUTHORIZE_URI = "https://accounts.google.com/o/oauth2/v2/auth";

// const queryString = qs.stringify({
//   client_id: CLIENT_ID,
//   redirect_uri: window.location.href,
//   response_type: "code",
//   scope: "https://www.googleapis.com/auth/userinfo.email",
//   approval_prompt: "force",
//   access_type: "offline"
// });

// contextWindow.location.href = `${AUTHORIZE_URI}?${queryString}`


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
}
