import { Request, Response } from "express";
import SurveyService from "../services/survey.service";

class SurveyController {
  constructor(private surveyService: SurveyService) {}
  getSurveyController = async (req: Request, res: Response) => {
    const result = await this.surveyService.getSurveyService(
      req.user?.id as number
    );
    res.json(result);
  };

  createSurveyController = async (req: Request, res: Response) => {
    const { category, response } = req.body;
    const result = await this.surveyService.createSurveyService(
      req.user?.id as number,
      category,
      response
    );
    if (result) {
      res.status(201).json({ message: "검사 저장 성공" });
    }
  };

  deleteSurveyController = async (req: Request, res: Response) => {
    const result = await this.surveyService.deleteSurveyService(
      Number(req.params.id)
    );
    if (result) {
      res.status(201).json({ message: "검사 삭제 성공" });
    }
  };

  updateSurveyController = async (req: Request, res: Response) => {
    const result = await this.surveyService.updateSurveyService(
      req.body.id,
      req.body.response
    );
    if (result) {
      res.status(201).json({ message: "검사 업데이트 성공" });
    }
  };
}

export default SurveyController;
