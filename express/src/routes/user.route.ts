import { Router } from "express";
import {
  checkPasswordController,
  createUserController,
  deleteUserController,
  getUserContoller,
  loginController,
  refreshTokenController,
  updateUserController,
} from "../controllers/user.controller";
import { validateBody } from "../middlewares/validateDto";
import { userDto } from "../dto/user.dto";
import { validateJWT } from "../middlewares/passport";
const router = Router();

router.get("/", validateJWT, getUserContoller);
router.get("/refresh", refreshTokenController);
router.post("/", validateBody(userDto), createUserController);
router.post("/login", loginController);
router.post("/check-password", validateJWT, checkPasswordController);
router.patch("/", validateJWT, updateUserController);
router.delete("/", validateJWT, deleteUserController);

export default router;
