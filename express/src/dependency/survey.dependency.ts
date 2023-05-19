import SurveyService from "../services/survey.service";
import SurveyRepository from "../db/repository/survey.repository";
import SurveyController from "../controllers/survey.controller";

const surveyRepository = new SurveyRepository();
const surveyService = new SurveyService(surveyRepository);
const surveyController = new SurveyController(surveyService);

export { surveyRepository, surveyService, surveyController };
