import { UserAgentDTO } from '~/domains/auth/auth.dto';

declare global {
  namespace Express {
    export interface Request {
      agent?: UserAgentDTO;
    }
  }
}
