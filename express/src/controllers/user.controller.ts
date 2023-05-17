import { NextFunction, Request, Response } from "express";
import UserService from "../services/user.service";
import dotenv from "dotenv";
dotenv.config();
class UserController {
  constructor(private userService: UserService) {}

  getUserContoller = async (req: Request, res: Response) => {
    const result = await this.userService.getUserService(
      req.user?.email as string
    );
    if (!result) {
      res.status(404).json({ message: "존재하지 않는 계정입니다" });
    } else {
      res.status(201).json(result);
    }
  };

  loginController = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const result = await this.userService.loginService(email, password);
    if (result.message) {
      res.status(404).json(result.message);
    } else {
      res.status(201).json(result);
    }
  };

  createUserController = async (req: Request, res: Response) => {
    const result = await this.userService.createUserService(req.body);
    if (result.message) {
      res.status(404).json(result.message);
    } else {
      res.status(201).json(result);
    }
  };

  refreshTokenController = async (req: Request, res: Response) => {
    const newToken = await this.userService.refreshTokenService(
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

  updateUserController = async (req: Request, res: Response) => {
    const result = await this.userService.updateUserService(
      req.user?.id as number,
      req.body.password
    );
    if (result) {
      res.status(201).json({ message: "유저 업데이트 성공" });
    }
  };

  deleteUserController = async (req: Request, res: Response) => {
    const result = await this.userService.deleteUserService(
      req.user?.id as number
    );
    if (result) {
      res.status(201).json({ message: "유저 삭제 성공" });
    }
  };

  checkPasswordController = async (req: Request, res: Response) => {
    const result = await this.userService.checkPasswordService(
      req.user?.email as string,
      req.body.password
    );
    if (result) {
      res.status(201).json({ message: "비밀번호 확인 성공" });
    } else {
      res.status(404).json({ message: "기존 비밀번호를 확인하세요" });
    }
  };

  googleLoginController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    await this.userService.googleLoginService(req, res, next);
  };

  googleCallbackController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { token, refreshToken } =
      await this.userService.googleCallbackService(req, res, next);

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
    await this.userService.kakaoLoginService(req, res, next);
  };

  kakaoCallbackController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { token, refreshToken } = await this.userService.kakaoCallbackService(
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

export default UserController;
