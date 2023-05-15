import { Router } from "express";
import {
  createSurveyController,
  deleteSurveyController,
  getAllSurveyController,
} from "../controllers/survey.controller";
import { validateBody, validateNumberParams } from "../middlewares/validateDto";
import { surveyDto } from "../dto/survey.dto";
const router = Router();

router.get("/:id", validateNumberParams(), getAllSurveyController);
router.post("/", validateBody(surveyDto), createSurveyController);
router.delete("/:id", validateNumberParams(), deleteSurveyController);

export default router;
