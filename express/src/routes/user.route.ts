import { Router } from "express";
import { userController } from "../dependency/user.dependency";

const router = Router();
const {
  getUserContoller,
  checkPasswordController,
  updateUserController,
  deleteUserController,
} = userController;

router.get("/", getUserContoller);
router.patch("/", updateUserController);
router.delete("/", deleteUserController);
router.post("/check-password", checkPasswordController);

export default router;
