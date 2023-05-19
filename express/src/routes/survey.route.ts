import { Router } from "express";
import { validateBody } from "../middlewares/validateDto";
import { surveyDto, updateSurveyDto } from "../dto/survey.dto";
import { surveyController } from "../dependency/survey.dependency";

const router = Router();
const {
  createSurveyController,
  deleteSurveyController,
  getSurveyController,
  updateSurveyController,
} = surveyController;

router.get("/", getSurveyController);
router.post("/", validateBody(surveyDto), createSurveyController);
router.patch("/", validateBody(updateSurveyDto), updateSurveyController);
router.delete("/:id", deleteSurveyController);

export default router;
