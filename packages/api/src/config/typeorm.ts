import { ConnectionOptions } from 'typeorm';
import { redisConfig } from './redis';
import { getEnv } from '~/lib/env';

const config: ConnectionOptions = {
  type: getEnv('DB_TYPE') as any,
  host: getEnv('DB_HOST'),
  port: +getEnv('DB_PORT'),
  username: getEnv('DB_USERNAME'),
  password: getEnv('DB_PASSWORD'),
  database: getEnv('DB_DATABASE'),
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrationsRun: false,
  logging: getEnv('NODE_ENV') === 'development',
  logger: getEnv('DB_LOGGER') as any,
  migrations: ['src/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  cache: {
    type: 'redis',
    options: redisConfig,
  },
};

export default config
