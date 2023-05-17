import { Router } from "express";
import {
  createSurveyController,
  deleteSurveyController,
  getSurveyController,
  updateSurveyController,
} from "../controllers/survey.controller";
import { validateBody } from "../middlewares/validateDto";
import { surveyDto, updateSurveyDto } from "../dto/survey.dto";
const router = Router();

router.get("/", getSurveyController);
router.post("/", validateBody(surveyDto), createSurveyController);
router.patch("/", validateBody(updateSurveyDto), updateSurveyController);
router.delete("/:id", deleteSurveyController);

export default router;
