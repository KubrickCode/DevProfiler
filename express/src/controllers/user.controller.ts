import { NextFunction, Request, Response } from "express";
import UserService from "../services/user.service";
import dotenv from "dotenv";
dotenv.config();
class UserController {
  constructor(private userService: UserService) {}

  getUserContoller = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = await this.userService.getUserService(
        req.user?.email as string
      );
      res.status(201).json(result);
    } catch (error) {
      next({
        status: 404,
        message: error,
      });
    }
  };

  updateUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      await this.userService.updateUserService(
        req.user?.id as number,
        req.body.password
      );
      res.status(201).json({ message: "유저 업데이트 성공" });
    } catch (error) {
      next({
        status: 404,
        message: error,
      });
    }
  };

  deleteUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      await this.userService.deleteUserService(req.user?.id as number);
      res.status(201).json({ message: "유저 삭제 성공" });
    } catch (error) {
      next({
        status: 404,
        message: error,
      });
    }
  };

  checkPasswordController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      await this.userService.checkPasswordService(
        req.user?.email as string,
        req.body.password
      );
      res.status(201).json({ message: "비밀번호 확인 성공" });
    } catch (error) {
      next({
        status: 404,
        message: error,
      });
    }
  };
}

export default UserController;
