export const envSchema = {
  common: [
    'NODE_ENV',

    'CLIENT_SERVER_HOST',

    'GOOGLE_CLIENT_ID',
    'GOOGLE_CLIENT_SECRET',

    'FACEBOOK_CLIENT_ID',
    'FACEBOOK_CLIENT_SECRET',

    'DB_TYPE',
    'DB_HOST',
    'DB_PORT',
    'DB_DATABASE',
    'DB_LOGGER',
    'DB_USERNAME',
    'DB_PASSWORD',

    'REDIS_HOST',
    'REDIS_PORT',

    'ES_HOST',
    'ES_PORT',
  ],

  development: [],
  production: [],
} as const;

export type RequiredEnv =
  | typeof envSchema.common[number]
  | typeof envSchema.development[number]
  | typeof envSchema.production[number];

export function getEnv(env: RequiredEnv): string {
  return process.env[env] || '';
}

export function checkEnvs() {
  const requiredEnvs: readonly string[] = [
    ...envSchema.common,
    ...(getEnv('NODE_ENV') === 'production'
      ? envSchema.production
      : envSchema.development),
  ];

  requiredEnvs.forEach(env => {
    if (process.env[env] === undefined) {
      throw new Error(`Environment variable ${env} is not set! Exiting..`);
    }
  });
}
