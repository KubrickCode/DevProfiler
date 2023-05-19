import { Router } from "express";
import { validateBody } from "../middlewares/validateDto";
import { userDto } from "../dto/user.dto";
import { authController } from "../dependency/auth.dependency";

const router = Router();
const {
  refreshTokenController,
  createUserController,
  loginController,
  googleLoginController,
  googleCallbackController,
  kakaoLoginController,
  kakaoCallbackController,
} = authController;

router.get("/refresh", refreshTokenController);
router.get("/google", googleLoginController);
router.get("/google/callback", googleCallbackController);
router.get("/kakao", kakaoLoginController);
router.get("/kakao/callback", kakaoCallbackController);
router.post("/", validateBody(userDto), createUserController);
router.post("/login", loginController);

export default router;
