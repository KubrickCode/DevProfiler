import { Router } from "express";
import { validateBody } from "../middlewares/validateDto";
import { userDto } from "../dto/user.dto";
import { validateJWT } from "../middlewares/passport";
import { userController } from "../dependency/user.dependency";

const router = Router();
const {
  getUserContoller,
  refreshTokenController,
  createUserController,
  loginController,
  checkPasswordController,
  updateUserController,
  deleteUserController,
  googleLoginController,
  googleCallbackController,
} = userController;

router.get("/", validateJWT, getUserContoller);
router.get("/refresh", refreshTokenController);
router.get("/google", googleLoginController);
router.get("/google/callback", googleCallbackController);
router.post("/", validateBody(userDto), createUserController);
router.post("/login", loginController);
router.post("/check-password", validateJWT, checkPasswordController);
router.patch("/", validateJWT, updateUserController);
router.delete("/", validateJWT, deleteUserController);

export default router;
