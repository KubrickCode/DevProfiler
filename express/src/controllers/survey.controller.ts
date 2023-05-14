import { Request, Response } from "express";
import serveyService from "../services/survey.service";

export const createSurveyController = async (req: Request, res: Response) => {
  await serveyService.createSurveyService(req.body);
};

export const deleteSurveyController = async (req: Request, res: Response) => {
  await serveyService.deleteSurveyService(Number(req.params.id));
};

export const getAllSurveyController = async (req: Request, res: Response) => {
  const result = await serveyService.getAllSurveyService(Number(req.params.id));
  res.json(result);
};
