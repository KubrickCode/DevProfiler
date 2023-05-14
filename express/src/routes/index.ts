import { Router } from "express";
import userRouter from "./user.route";
import surveyRouter from "./survey.route";
const router = Router();

router.use("/user", userRouter);
router.use("/survey", surveyRouter);

export default router;
