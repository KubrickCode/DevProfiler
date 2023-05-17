import SurveyService from "../services/survey.service";
import SurveyRepository from "../db/repository/survey.repository";
import SurveyController from "../controllers/survey.controller";

const surveyRepository = new SurveyRepository();
export const surveyService = new SurveyService(surveyRepository);
export const surveyController = new SurveyController(surveyService);
