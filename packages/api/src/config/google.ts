import { getEnv } from '../lib/env';

const config = {
  client_id: getEnv('GOOGLE_CLIENT_ID') as any,
  client_secret: getEnv('GOOGLE_CLIENT_SECRET') as any,
};

export default config
