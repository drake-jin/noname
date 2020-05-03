import * as qs from 'query-string'

import {
  Injectable,
} from '@nestjs/common';

const {
  GOOGLE_OAUTH_API_SERVER,
  GOOGLE_CLIENT_ID,
  CLIENT_SERVER_HOST,
} = process.env

const providerDatasource = {
  google: {
    oauthServer: GOOGLE_OAUTH_API_SERVER,
    query: {
      client_id: GOOGLE_CLIENT_ID,
      redirect_uri: `${CLIENT_SERVER_HOST}/logins/sso`,
      response_type: "code",
      scope: "https://www.googleapis.com/auth/userinfo.email",
      approval_prompt: "force",
      access_type: "offline"
    }
  }
}



@Injectable()
export default class AuthService {
  getRedirectURL(provider: string): string {
    return `${providerDatasource[provider].oauthServer}?${qs.stringify(providerDatasource[provider].query)}`;
  }
}
