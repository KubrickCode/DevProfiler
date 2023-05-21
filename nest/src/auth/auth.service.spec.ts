// import { Test, TestingModule } from '@nestjs/testing';
// import { AuthService } from './auth.service';
// import { UnauthorizedException } from '@nestjs/common';
// import { UserRepository } from '../user/user.repository';
// import { JwtService } from '@nestjs/jwt';
// import { RedisService } from '../redis/redis.service';
// import { HandlePassword } from '../integrations/handlePassword';

// describe('AuthService', () => {
//   let service: AuthService;
//   let userRepository: UserRepository;
//   let jwtService: JwtService;
//   let redisService: RedisService;
//   let handlePassword: HandlePassword;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         AuthService,
//         UserRepository,
//         JwtService,
//         RedisService,
//         HandlePassword,
//       ],
//     }).compile();

//     service = module.get<AuthService>(AuthService);
//     userRepository = module.get<UserRepository>(UserRepository);
//     jwtService = module.get<JwtService>(JwtService);
//     redisService = module.get<RedisService>(RedisService);
//     handlePassword = module.get<HandlePassword>(HandlePassword);
//   });

//   afterEach(() => {
//     jest.resetAllMocks();
//   });

//   describe('validateUser', () => {
//     it('should return user when email and password are valid', async () => {
//       const email = 'test@example.com';
//       const password = 'password123';
//       const user = { id: 1, email };
//       const comparePasswordSpy = jest
//         .spyOn(handlePassword, 'comparePassword')
//         .mockImplementation(async () => true);
//       jest.spyOn(userRepository, 'getUserByEmail').mockResolvedValue(user);

//       const result = await service.validateUser(email, password);

//       expect(comparePasswordSpy).toHaveBeenCalledWith(password, user.password);
//       expect(result).toEqual({ id: user.id, email: user.email });
//     });

//     it('should throw UnauthorizedException when email is invalid', async () => {
//       const email = 'test@example.com';
//       const password = 'password123';
//       jest.spyOn(userRepository, 'getUserByEmail').mockResolvedValue(null);

//       await expect(service.validateUser(email, password)).rejects.toThrow(
//         UnauthorizedException,
//       );
//     });

//     it('should throw UnauthorizedException when password is invalid', async () => {
//       const email = 'test@example.com';
//       const password = 'password123';
//       const user = { id: 1, email };
//       jest.spyOn(userRepository, 'getUserByEmail').mockResolvedValue(user);
//       jest.spyOn(handlePassword, 'comparePassword').mockResolvedValue(false);

//       await expect(service.validateUser(email, password)).rejects.toThrow(
//         UnauthorizedException,
//       );
//     });
//   });

//   // Write more test cases for other methods in AuthService
// });
