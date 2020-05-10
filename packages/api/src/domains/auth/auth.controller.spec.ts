import { Test, TestingModule } from '@nestjs/testing';
import AuthController from './auth.controller';
import AuthService from './auth.service';

describe('Auth Controller', () => {
  let appController: AuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    appController = app.get<AuthController>(AuthController);
  });


  it('should return "Hello World!"', () => {
    expect(appController.getAuth()).toBe('/auth getHello!');
  });

});
