import { Request, Response } from "express";
import serveyService from "../services/survey.service";

export const getSurveyController = async (req: Request, res: Response) => {
  const result = await serveyService.getSurveyService(req.user?.id as number);
  res.json(result);
};
export const createSurveyController = async (req: Request, res: Response) => {
  const { category, response } = req.body;
  const result = await serveyService.createSurveyService(
    req.user?.id as number,
    category,
    response
  );
  if (result) {
    res.status(201).json({ message: "검사 저장 성공" });
  }
};

export const deleteSurveyController = async (req: Request, res: Response) => {
  const result = await serveyService.deleteSurveyService(Number(req.params.id));
  if (result) {
    res.status(201).json({ message: "검사 삭제 성공" });
  }
};

export const updateSurveyController = async (req: Request, res: Response) => {
  const result = await serveyService.updateSurveyService(
    req.body.id,
    req.body.response
  );
  if (result) {
    res.status(201).json({ message: "검사 업데이트 성공" });
  }
};
