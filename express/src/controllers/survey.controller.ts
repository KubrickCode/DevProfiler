import { Request, Response } from "express";
import serveyService from "../services/survey.service";

export const getSurveyController = async (req: Request, res: Response) => {
  const result = await serveyService.getSurveyService(req.user?.id as number);
  res.json(result);
};
export const createSurveyController = async (req: Request, res: Response) => {
  const { category, response } = req.body;
  await serveyService.createSurveyService(
    req.user?.id as number,
    category,
    response
  );
};

export const deleteSurveyController = async (req: Request, res: Response) => {
  await serveyService.deleteSurveyService(req.params.id as number);
};
