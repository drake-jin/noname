import {
  Injectable,
  NestMiddleware,

  BadRequestException,
} from '@nestjs/common';
import { UAParser } from 'ua-parser-js'
import { UserAgentDTO } from '~/domains/auth/auth.dto'

import { Request, Response } from 'express';

const parser = new UAParser()

@Injectable()
export class DetectUserAgentMiddleware implements NestMiddleware {
  async use(req: Request, _: Response, next: Function) {
    const userAgent = req.headers['user-agent']
    if (req.headers['user-agent']) {
      parser.setUA(userAgent)
      const agent: UserAgentDTO = {
        browser: parser.getBrowser(),
        device: parser.getDevice(),
        engine: parser.getEngine(),
        os: parser.getOS(),
        cpu: parser.getCPU(),
        ua: parser.getUA(),
      }
      req.agent = agent
    } else {
      throw new BadRequestException()
    }

    next();
  }
}
