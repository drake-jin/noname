import * as qs from 'query-string'

import {
  Injectable,
} from '@nestjs/common'
import {
  JwtService
} from '@nestjs/jwt'

import { Request } from 'express'
import { SSOTokenDTO } from './auth.dto'

import { HttpService } from '@nestjs/common/http'

const {
  GOOGLE_OAUTH_API_SERVER,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  CLIENT_SERVER_HOST,
} = process.env

const providerDatasource = {
  google: {
    oauthServer: GOOGLE_OAUTH_API_SERVER,
    oauthServer2: 'https://www.googleapis.com/oauth2/v4/token',
    getCode: {
      client_id: GOOGLE_CLIENT_ID,
      redirect_uri: `${CLIENT_SERVER_HOST}/logins/waiting/google`,
      response_type: "code",
      prompt: 'consent',
      scope: "https://www.googleapis.com/auth/userinfo.email",
      access_type: "offline"
    },
    getToken: {
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      grant_type: 'authorization_code',
      redirect_uri: `${CLIENT_SERVER_HOST}/logins/waiting/google`,
      access_type: 'offline',
    }
  }
}





@Injectable()
export default class AuthService {
  constructor(
    private readonly httpService: HttpService,
    private readonly jwtService: JwtService,
  ) {}


  getRedirectURL(provider: string): string {
    return `${providerDatasource[provider].oauthServer}?${qs.stringify(providerDatasource[provider].getCode)}`;
  }

  async isSigned(provider: string, token: SSOTokenDTO, req: Request): Promise<void> {
    const datasource = providerDatasource[provider]
    const data = {
      code: token.code,
      ...datasource.getToken
    }
    const params = new URLSearchParams()
    Object.keys(data).forEach((key) => {
      params.append(key, data[key])
    })
    const axiosOptions = { headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    } }

    return this.httpService
      .post(`${datasource.oauthServer2}`, params, axiosOptions)
      .toPromise()
      .then(({ data }) => {
        data.id_token = this.jwtService.decode(data.id_token, { json: true })
/*
{
  access_token: 'access_token'
  expires_in: 3599,
  refresh_token: string,
  scope: 'https://www.googleapis.com/auth/userinfo.email openid',
  token_type: 'Bearer',
  id_token: jwt decode
}
*/
      })
      .catch(({ response }) => {
        console.log('fail')
        console.log(response.headers)
        console.log(response.data)
      })
  }
}