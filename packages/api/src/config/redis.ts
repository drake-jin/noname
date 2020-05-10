import { getEnv } from '../lib/env';

export const redisConfig = {
  host: getEnv('REDIS_HOST') as any,
  port: getEnv('REDIS_PORT') as any,
};
