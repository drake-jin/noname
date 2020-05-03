import { UserAgentDTO } from '~/services/auth/auth.dto';

declare global {
  namespace Express {
    export interface Request {
      agent?: UserAgentDTO;
    }
  }
}
