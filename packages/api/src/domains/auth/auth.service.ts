import {
  Injectable,
} from '@nestjs/common'

import { TokenDTO } from './auth.dto'

import AuthBO from './auth.bo'

@Injectable()
export default class AuthService {

  constructor(
    private readonly authBO: AuthBO,
  ) { }

  getRedirectURL(provider: string): string {
    if (provider === 'google') {
      return this.authBO.getGoogleRedirectUrl()
    } else if (provider === 'facebook') {
      return this.authBO.getFacebookRedirectUrl()
    }
  }

  async isSigned(provider: string, token: TokenDTO): Promise<void> {
    const data = {
      provider,
      access_token: '',
      refresh_token: '',
    }
    if (provider === 'google') {
      const { access_token, refresh_token } = await this.authBO.getGoogleTokens(token.code)
      data.access_token = access_token
      data.access_token = refresh_token
    } else if (provider === 'facebook') {
      const { access_token, refresh_token } = await this.authBO.getFacebookTokens(token.code)
      data.access_token = access_token
      data.access_token = refresh_token
    }

    // TODO: check is logined? from DB
    return new Promise((resolve) => {
      resolve()
    })
  }
}