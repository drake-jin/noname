export const envSchema = {
  common: [
    'NODE_ENV',
    'GOOGLE_CLIENT_ID',
    'GOOGLE_CLIENT_SECRET',
    'GOOGLE_OAUTH_API_SERVER',
    'CLIENT_SERVER_HOST',
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
