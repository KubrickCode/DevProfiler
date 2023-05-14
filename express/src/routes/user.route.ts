import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  loginController,
  updateUserController,
} from "../controllers/user.controller";
const router = Router();

router.post("/", createUserController);
router.post("/login", loginController);
router.patch("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;
