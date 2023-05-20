import HandlePassword from "../integrations/handlePassword";
import { User } from "../db/db.type";
import UserRepository from "../db/repository/user.repository";
import HandleLogin from "../integrations/handleLogin";
import { NextFunction, Request, Response } from "express";

class AuthService {
  constructor(
    private userRepository: UserRepository,
    private handleLogin: HandleLogin,
    private handlePassword: HandlePassword
  ) {}

  loginService = async (email: string, password: string) => {
    return await this.handleLogin.loginAuthenticate(email, password);
  };

  refreshTokenService = async (refreshToken: string) => {
    return await this.handleLogin.verifyRefreshToken(refreshToken);
  };

  createUserService = async (user: Pick<User, "email" | "password">) => {
    const { email, password } = user;
    const isExistUser = await this.userRepository.getUserByEmail(email);
    if (isExistUser) throw "이미 존재하는 이메일입니다";
    const hashedPassword = await this.handlePassword.hashPassword(password!);
    await this.userRepository.create({
      email,
      password: hashedPassword,
      provider: "Local",
    });
    return await this.handleLogin.loginAuthenticate(email, password!);
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

export default AuthService;
