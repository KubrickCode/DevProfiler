import { Request, Response } from "express";
import serveyService from "../services/survey.service";

export const createSurveyController = async (req: Request, res: Response) => {
  await serveyService.createSurveyService(req.body);
};

export const deleteSurveyController = async (req: Request, res: Response) => {
  await serveyService.deleteSurveyService(req.params.id as number);
};

export const getAllSurveyController = async (req: Request, res: Response) => {
  const result = await serveyService.getAllSurveyService(
    req.params.id as number
  );
  res.json(result);
};
