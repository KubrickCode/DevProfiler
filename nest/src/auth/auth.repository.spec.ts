import { AuthRepository } from './auth.repository';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';

describe('UserRepository', () => {
  let authRepository: AuthRepository;
  let prismaService: PrismaService;

  beforeEach(async () => {
    prismaService = new PrismaService();
    authRepository = new AuthRepository(prismaService);
  });

  it.only('createUserRepository', () => {
    const mockData: Partial<User> = {
      email: 'test@test.test',
      provider: 'Local',
      password: 'test1234!@',
    };
    authRepository.create(mockData.email, mockData.provider, mockData.password);
  });

  it('getUserByEmailRepository', () => {
    return;
  });

  it('updateUserRepository', () => {
    return;
  });

  it('deleteUserRepository', () => {
    return;
  });
});
