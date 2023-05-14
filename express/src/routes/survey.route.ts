import { Router } from "express";
import {
  createSurveyController,
  deleteSurveyController,
  getAllSurveyController,
} from "../controllers/survey.controller";
const router = Router();

router.get("/:id", getAllSurveyController);
router.post("/", createSurveyController);
router.delete("/:id", deleteSurveyController);

export default router;
