import { Request, Response } from "express";
import userService from "../services/user.service";

export const createUserController = async (req: Request, res: Response) => {
  await userService.createUserService(req.body);
};

export const updateUserController = async (req: Request, res: Response) => {
  await userService.updateUserService(Number(req.params.id), req.body.password);
};

export const deleteUserController = async (req: Request, res: Response) => {
  await userService.deleteUserService(Number(req.params.id));
};
