import { Router } from "express";
import {
  createSurveyController,
  deleteSurveyController,
  getSurveyController,
} from "../controllers/survey.controller";
import { validateBody, validateNumberParams } from "../middlewares/validateDto";
import { surveyDto } from "../dto/survey.dto";
const router = Router();

router.get("/", getSurveyController);
router.post("/", validateBody(surveyDto), createSurveyController);
router.delete("/:id", validateNumberParams(), deleteSurveyController);

export default router;
