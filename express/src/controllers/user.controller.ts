import { Request, Response } from "express";
import userService from "../services/user.service";

export const getUserContoller = async (req: Request, res: Response) => {
  const result = await userService.getUserService(req.user?.email as string);
  if (!result) {
    res.status(404).json({ message: "존재하지 않는 계정입니다" });
  } else {
    res.status(201).json(result);
  }
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await userService.loginService(email, password);
  if (result.message) {
    res.status(404).json(result.message);
  } else {
    res.status(201).json(result);
  }
};

export const createUserController = async (req: Request, res: Response) => {
  const result = await userService.createUserService(req.body);
  if (result.message) {
    res.status(404).json(result.message);
  } else {
    res.status(201).json(result);
  }
};

export const refreshTokenController = async (req: Request, res: Response) => {
  const newToken = await userService.refreshTokenService(
    req.headers["x-refresh-token"] as string
  );
  if (!newToken) {
    return res.status(401).json({ message: "리프레쉬 토큰이 만료되었습니다" });
  } else {
    res.status(201).json({ token: newToken });
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  const result = await userService.updateUserService(
    req.user?.id as number,
    req.body.password
  );
  if (result) {
    res.status(201).json({ message: "유저 업데이트 성공" });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  const result = await userService.deleteUserService(req.user?.id as number);
  if (result) {
    res.status(201).json({ message: "유저 삭제 성공" });
  }
};

export const checkPasswordController = async (req: Request, res: Response) => {
  const result = await userService.checkPasswordService(
    req.user?.email as string,
    req.body.password
  );
  if (result) {
    res.status(201).json({ message: "비밀번호 확인 성공" });
  }
};
