import { Request, Response } from "express";
import userService from "../services/user.service";

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await userService.login(email, password);
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

export const updateUserController = async (req: Request, res: Response) => {
  await userService.updateUserService(Number(req.params.id), req.body.password);
};

export const deleteUserController = async (req: Request, res: Response) => {
  await userService.deleteUserService(Number(req.params.id));
};
