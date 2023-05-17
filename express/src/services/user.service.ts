import HandlePassword from "../integrations/handlePassword";
import { User } from "../db/db.type";
import UserRepository from "../db/repository/user.repository";
import HandleLogin from "../integrations/handleLogin";
import { surveyService } from "../dependency/survey.dependency";
import { NextFunction, Request, Response } from "express";

class UserService {
  constructor(
    private userRepository: UserRepository,
    private handleLogin: HandleLogin,
    private handlePassword: HandlePassword
  ) {}

  getUserService = async (_email: string) => {
    const result = await this.userRepository.getUserByEmail(_email);
    if (!result) {
      return null;
    }
    const { id, email, provider } = result as User;
    return { id, email, provider };
  };

  loginService = async (email: string, password: string) => {
    return await this.handleLogin.loginAuthenticate(email, password);
  };

  refreshTokenService = async (refreshToken: string) => {
    return await this.handleLogin.verifyRefreshToken(refreshToken);
  };

  createUserService = async (user: Omit<User, "id">) => {
    const { email, password } = user;
    const isExistUser = await this.userRepository.getUserByEmail(email);
    if (isExistUser) return { message: "이미 존재하는 이메일입니다" };
    const hashedPassword = await this.handlePassword.hashPassword(password!);
    await this.userRepository.create({
      email,
      password: hashedPassword,
      provider: "Local",
    });
    return await this.handleLogin.loginAuthenticate(email, password!);
  };

  updateUserService = async (id: number, password: string) => {
    const hashedPassword = await this.handlePassword.hashPassword(password);
    return await this.userRepository.update(id, hashedPassword);
  };

  deleteUserService = async (id: number) => {
    await surveyService.deleteAllByUserId(id);
    return await this.userRepository.delete(id);
  };

  checkPasswordService = async (email: string, password: string) => {
    const user = await this.userRepository.getUserByEmail(email);
    return await this.handlePassword.comparePassword(password, user?.password!);
  };

  googleLoginService = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    return await this.handleLogin.googleAuthenticate()(req, res, next);
  };

  googleCallbackService = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    return (await this.handleLogin.googleCallbackAuthenticate(
      req,
      res,
      next
    )) as User;
  };

  kakaoLoginService = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    return await this.handleLogin.kakaoAuthenticate()(req, res, next);
  };

  kakaoCallbackService = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    return (await this.handleLogin.kakaoCallbackAuthenticate(
      req,
      res,
      next
    )) as User;
  };
}

export default UserService;
