import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { JwtService } from '@nestjs/jwt';
import { RedisService } from '../redis/redis.service';
import { HandlePassword } from '../integrations/handlePassword';
import { Provider } from '@prisma/client';

describe('AuthService', () => {
  let service: AuthService;
  let userRepository: UserRepository;
  // let jwtService: JwtService;
  // let redisService: RedisService;
  let handlePassword: HandlePassword;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        UserRepository,
        JwtService,
        RedisService,
        HandlePassword,
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userRepository = module.get<UserRepository>(UserRepository);
    // jwtService = module.get<JwtService>(JwtService);
    // redisService = module.get<RedisService>(RedisService);
    handlePassword = module.get<HandlePassword>(HandlePassword);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('validateUser', () => {
    it('validate User and return email', async () => {
      const mockUser = {
        id: 1,
        email: 'test@test.com',
        password: 'test1234!@',
        provider: 'Local' as Provider,
      };

      jest.spyOn(userRepository, 'getUserByEmail').mockResolvedValue(mockUser);

      const result = await service.validateUser(
        mockUser.email,
        mockUser.password,
      );
      expect(result).toEqual({ id: mockUser.id, email: mockUser.email });
    });

    it('throw UnauthorizedException when email is invalid', async () => {
      const email = 'test@test.com';
      const password = 'test1234!@';
      jest.spyOn(userRepository, 'getUserByEmail').mockResolvedValue(null);

      await expect(service.validateUser(email, password)).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('throw UnauthorizedException when password is invalid', async () => {
      const mockUser = {
        id: 1,
        email: 'test@test.com',
        password: 'test1234!@',
        provider: 'Local' as Provider,
      };
      jest.spyOn(userRepository, 'getUserByEmail').mockResolvedValue(mockUser);
      jest.spyOn(handlePassword, 'comparePassword').mockResolvedValue(false);

      await expect(
        service.validateUser(mockUser.email, mockUser.password),
      ).rejects.toThrow(UnauthorizedException);
    });
  });
});
