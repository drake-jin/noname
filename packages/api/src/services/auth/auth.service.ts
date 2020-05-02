import {
  Injectable,
} from '@nestjs/common';

@Injectable()
export default class AuthService {
  getHello(): string {
    return '/auth getHello!';
  }
}
