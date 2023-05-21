import { NextFunction, Request, Response } from "express";
import SurveyService from "../services/survey.service";

class SurveyController {
  constructor(private surveyService: SurveyService) {}
  getSurveyController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = await this.surveyService.getSurveyService(
        req.user?.id as number
      );
      res.status(200).json(result);
    } catch (error) {
      next({
        status: 403,
        message: "검사 결과 불러오기 실패",
        error,
      });
    }
  };

  createSurveyController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { category, response } = req.body;
      await this.surveyService.createSurveyService(
        req.user?.id as number,
        category,
        response
      );
      res.status(201).json({ message: "검사 결과 저장 성공" });
    } catch (error) {
      next({
        status: 403,
        message: "검사 결과 저장 실패",
        error,
      });
    }
  };

  deleteSurveyController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      await this.surveyService.deleteSurveyService(Number(req.params.id));
      res.status(201).json({ message: "검사 결과 삭제 성공" });
    } catch (error) {
      next({
        status: 403,
        message: "검사 결과 삭제 실패",
        error,
      });
    }
  };

  updateSurveyController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      await this.surveyService.updateSurveyService(
        req.body.id,
        req.body.response
      );
      res.status(201).json({ message: "검사 결과 업데이트 성공" });
    } catch (error) {
      next({
        status: 403,
        message: "검사 결과 업데이트 실패",
        error,
      });
    }
  };
}

export default SurveyController;
