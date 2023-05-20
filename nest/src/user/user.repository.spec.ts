import { UserRepository } from './user.repository';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';

describe('UserRepository', () => {
  let userRepository: UserRepository;
  let prismaService: PrismaService;

  beforeEach(async () => {
    prismaService = new PrismaService();
    userRepository = new UserRepository(prismaService);
  });

  it('create user repo', async () => {
    const mockData: Partial<User> = {
      email: 'test@test.test',
      provider: 'Local',
      password: 'test1234!@',
    };
    const result = await userRepository.create(
      mockData.email,
      mockData.provider,
      mockData.password,
    );
    expect(result.email).toEqual(mockData.email);
    expect(result.provider).toEqual(mockData.provider);
  });

  it('get user by email repo', async () => {
    const mockEmail = 'test@test.test';
    const result = await userRepository.getUserByEmail(mockEmail);
    expect(result.email).toEqual(mockEmail);
  });

  it('update user repo', async () => {
    const mockData: Partial<User> = {
      id: 2,
      password: 'test1234!@',
    };
    const result = await userRepository.update(mockData.id, mockData.password);
    expect(result.id).toEqual(mockData.id);
  });

  it('delete user repo', async () => {
    const mockId = 2;
    const result = await userRepository.delete(mockId);
    expect(result.id).toEqual(mockId);
  });
});
