import { Type } from 'class-transformer';

export class SSOTokenDTO {
  @Type(() => String)
  authuser: string;

  @Type(() => String)
  code: string;

  @Type(() => String)
  prompt: string;

  @Type(() => String)
  scope: string;
}


export class UserAgentDTO {
  browser: {
    name: string;
    version: string;
  };
  device: {
    vendor: string;
    model: string;
    type: string;
  };
  engine: {
    name: string;
    version: string;
  };
  os: {
    name: string;
    version: string;
  };
  cpu: { architecture: string };
  ua: string;
}