import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import AuthService from "../services/auth.service";
dotenv.config();

class AuthController {
  constructor(private authService: AuthService) {}

  createUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = await this.authService.createUserService(req.body);
      res.status(201).json(result);
    } catch (error) {
      next({
        status: 404,
        message: error,
      });
    }
  };

  loginController = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const result = await this.authService.loginService(email, password);
      res.status(201).json(result);
    } catch (error) {
      next({
        status: 404,
        message: error,
      });
    }
  };

  refreshTokenController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const newToken = await this.authService.refreshTokenService(
        req.headers["x-refresh-token"] as string
      );
      res.status(201).json({ token: newToken });
    } catch (error) {
      next({
        status: 401,
        message: error,
      });
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
