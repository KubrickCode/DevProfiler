import { Router } from "express";
import userRouter from "./user.route";
import surveyRouter from "./survey.route";
import { validateJWT } from "../middlewares/passport";
const router = Router();

router.use("/user", userRouter);
router.use("/survey", validateJWT, surveyRouter);

export default router;
