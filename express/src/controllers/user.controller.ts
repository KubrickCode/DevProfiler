import { Request, Response } from "express";
import userService from "../services/user.service";

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await userService.login(email, password);
  res.json(result);
};

export const createUserController = async (req: Request, res: Response) => {
  const result = await userService.createUserService(req.body);
  res.json(result);
};

export const updateUserController = async (req: Request, res: Response) => {
  await userService.updateUserService(Number(req.params.id), req.body.password);
};

export const deleteUserController = async (req: Request, res: Response) => {
  await userService.deleteUserService(Number(req.params.id));
};
