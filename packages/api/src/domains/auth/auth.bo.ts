import {
  Injectable,
} from '@nestjs/common'
import {
  JwtService
} from '@nestjs/jwt'

import { Facebook, FacebookException } from 'fb';
import { google } from 'googleapis'

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  CLIENT_SERVER_HOST,

  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
} = process.env

@Injectable()
export default class AuthBO {
  private oauth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    `${CLIENT_SERVER_HOST}/logins/waiting/google`,
  );

  private fb = new Facebook({
    appId: FACEBOOK_CLIENT_ID,
    appSecret: FACEBOOK_CLIENT_SECRET,
    redirectUri: `${CLIENT_SERVER_HOST}/logins/waiting/facebook`,
  })

  constructor(
    private readonly jwtService: JwtService,
  ) { }

  getFacebookRedirectUrl() {
    return this.fb.getLoginUrl()
  }

  getGoogleRedirectUrl() {
    return this.oauth2Client.generateAuthUrl({
      access_type: 'offline',
      response_type: "code",
      prompt: 'consent',
      scope: ["https://www.googleapis.com/auth/userinfo.email"],
    });
  }
  async getGoogleTokens(code) {
    const { tokens } = await this.oauth2Client.getToken(code)
    this.oauth2Client.setCredentials(tokens)
    const data = {
      id: this.jwtService.decode(tokens.id_token, { json: true }),
      ...tokens
    }
    /*
    {
      id: {
        iss: 'https://accounts.google.com',
        azp: '989783283769-arbj3rnjo09k820djnihrh8pgv89bd5o.apps.googleusercontent.com',
        aud: '989783283769-arbj3rnjo09k820djnihrh8pgv89bd5o.apps.googleusercontent.com',
        sub: '101748602294565110881',
        hd: 'daangn.com',
        email: 'jin@daangn.com',
        email_verified: true,
        at_hash: 'QK-ULJoEvo0R1wzfD7fTaA',
        iat: 1589101150,
        exp: 1589104750
      },
      access_token: 'ya29.a0AfH6SMBct2BngykrohFW2OM1b5Jl9yFsylYPd17TcJs9b6fjibJhPyF6BwZbWeO6Q2aFEDBFVxZZDPY8JNIhCKUM0AI0wkZia5cYDvzzzH7GNoAPgzeEwvzgk3s6CvQwiSe8439Sn2LuvlIFfikEVL1Bb7hB8-Qn1vU',
      refresh_token: '1//0efp1s8IBETTfCgYIARAAGA4SNwF-L9Ir8LopK_N4k6hW5qwVBgx3yhPyPX1JiqRf2sRNFiP-4TI8oON09et6Lc4EEIfc7klDJTU',
      scope: 'https://www.googleapis.com/auth/userinfo.email openid',
      token_type: 'Bearer',
      id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImMxNzcxODE0YmE2YTcwNjkzZmI5NDEyZGEzYzZlOTBjMmJmNWI5MjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5ODk3ODMyODM3NjktYXJiajNybmpvMDlrODIwZGpuaWhyaDhwZ3Y4OWJkNW8uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5ODk3ODMyODM3NjktYXJiajNybmpvMDlrODIwZGpuaWhyaDhwZ3Y4OWJkNW8uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDE3NDg2MDIyOTQ1NjUxMTA4ODEiLCJoZCI6ImRhYW5nbi5jb20iLCJlbWFpbCI6ImppbkBkYWFuZ24uY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJRSy1VTEpvRXZvMFIxd3pmRDdmVGFBIiwiaWF0IjoxNTg5MTAxMTUwLCJleHAiOjE1ODkxMDQ3NTB9.tEvoIkgFkWoJoXrzwYcZFK253-UPcdMlcpeS1khiB0ISCuIX1DDwhcHjUqwyEjkUd6VP-SsSdK89kd0RCCvcmY9VDrCu0AQZnEkvVJBaHDLOsiO0gj_ymGyaFT5qdknk3I1hvrWQKJoY_99iZHdPvWZhzQwUVt9k607SLGjb6qfm2GEWIc8OZcprPCf1J7tk_4H-EIQTpVeyozhdoDU0veHsanVQU84pa2xyvDRKDiPcwfvQjTHFWjHzmk8T3tfGy7zd9oS1GSX2102pkR7Du04aFOjDoLLTsI0avMOCeuk3jD8rfiH8QNGqkh53YokGBxgu_drK87L-9Mtgig6slQ',
      expiry_date: 1589104749709
    }
    */
    return data
  }
  async getFacebookTokens(code) {
    const options = this.fb.options()
    try {
      const response = await this.fb.api('oauth/access_token', {
        code,
        redirect_uri: options.redirectUri,
        client_id: options.appId,
        client_secret: options.appSecret
      })

      const { code: refresh_token } = await this.fb.api('oauth/client_code', {
        code,
        redirect_uri: options.redirectUri,
        client_id: options.appId,
        client_secret: options.appSecret,
        access_token: response.access_token,
      })
      response.refresh_token = refresh_token
      return response
    } catch (e) {
      throw new FacebookException(e)
    }
    /*
    {
      access_token: 'EAANC4YTssEMBAOZCMumSQs8rPBxkC4Rp2SVF7mKD140ZAQXzc5q7UILShjhZBUpEILSBn1bWRwdVA1Rn2mupxEbEZCEzzFJ1XampkZB8mQl3Ylp4l4Frb6MEvQHiErSgKtzaZABCbbqa47kFRuDO9Lu2p4gSMGlkRf5bYmQJQBSAZDZD',
      token_type: 'bearer',
      expires_in: 5181986,
      refresh_token: 'AQBUzRanFFwXZ4stP0HLUN9niVtO336CAEoL-QzS59rf2PorAc-m82XeEUemeD2tw8QeJbJ3Xgu1M7vr0D3ILKqlmw4G0KReMnM-w1pNxKiSYz47Ll_JHQIC8C-bE4dAWTZyEGePKhAlwp4sDvVPv-XURpTYbJFRm4ywWtszhYvRDL1Wjat4lh5yPVH5FS_LLFcUfcXlCK0Ldfl-7c-oL8JQKGTmgRYzY-HcJ8dT2W7DyiA_aLMoCtgCtsdNlIVI79bE9_Q5Rv9zLJUoxPvGU0jwyn9dJYpORYqI0Cnne8F-THQ2DtvGghpBkf_jI55ozRc'
    }
    */
  }
}