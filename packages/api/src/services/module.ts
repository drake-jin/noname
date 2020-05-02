import { Module } from '@nestjs/common';

import auth from './auth'

@Module({
  imports: [
    auth.AuthModule,
  ],
})
export default class ServicesModule { }
