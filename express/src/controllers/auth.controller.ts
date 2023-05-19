import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import AuthService from "../services/auth.service";
dotenv.config();

class AuthController {
  constructor(private authService: AuthService) {}

  loginController = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const result = await this.authService.loginService(email, password);
    if (result.message) {
      res.status(404).json(result.message);
    } else {
      res.status(201).json(result);
    }
  };

  createUserController = async (req: Request, res: Response) => {
    const result = await this.authService.createUserService(req.body);
    if (result.message) {
      res.status(404).json(result.message);
    } else {
      res.status(201).json(result);
    }
  };

  refreshTokenController = async (req: Request, res: Response) => {
    const newToken = await this.authService.refreshTokenService(
      req.headers["x-refresh-token"] as string
    );
    if (!newToken) {
      return res
        .status(401)
        .json({ message: "리프레쉬 토큰이 만료되었습니다" });
    } else {
      res.status(201).json({ token: newToken });
    }
  };

  googleLoginController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    await this.authService.googleLoginService(req, res, next);
  };

  googleCallbackController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { token, refreshToken } =
      await this.authService.googleCallbackService(req, res, next);

    res
      .status(303)
      .redirect(
        `${process.env.REDIRECT_ROOT}/authorize?token=${token}&refreshToken=${refreshToken}`
      );
  };

  kakaoLoginController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    await this.authService.kakaoLoginService(req, res, next);
  };

  kakaoCallbackController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { token, refreshToken } = await this.authService.kakaoCallbackService(
      req,
      res,
      next
    );

    res
      .status(303)
      .redirect(
        `${process.env.REDIRECT_ROOT}/authorize?token=${token}&refreshToken=${refreshToken}`
      );
  };
}

export default AuthController;
