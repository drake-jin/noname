import { getEnv } from '../lib/env';

const config = {
  client_id: getEnv('FACEBOOK_CLIENT_ID') as any,
  client_secret: getEnv('FACEBOOK_CLIENT_SECRET') as any,
};

export default config
