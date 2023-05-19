import { Router } from "express";
import userRouter from "./user.route";
import surveyRouter from "./survey.route";
import authRouter from "./auth.route";
import { validateJWT } from "../middlewares/passport";
const router = Router();

router.use("/auth", authRouter);
router.use("/user", validateJWT, userRouter);
router.use("/survey", validateJWT, surveyRouter);

export default router;
