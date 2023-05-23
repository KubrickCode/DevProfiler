import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserRepository } from '../user/user.repository';
import { JwtService } from '@nestjs/jwt';
import { RedisService } from '../redis/redis.service';
import { HandlePassword } from '../integrations/handlePassword';
import { Provider } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { ConfigService } from '@nestjs/config';

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
        PrismaService,
        ConfigService,
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
    it('validate User and return id & email', async () => {
      const mockUser = {
        id: 1,
        email: 'test@test.com',
        password: 'test1234!@',
        provider: 'Local' as Provider,
      };

      jest.spyOn(userRepository, 'getUserByEmail').mockResolvedValue(mockUser); // 이메일 존재여부 확인
      jest.spyOn(handlePassword, 'comparePassword').mockResolvedValue(true); // 비밀번호 확인

      const result = await service.validateUser(
        mockUser.email,
        mockUser.password,
      );
      expect(result).toEqual({ id: mockUser.id, email: mockUser.email });
    });
  });
});
