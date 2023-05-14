import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  updateUserController,
} from "../controllers/user.controller";
const router = Router();

router.post("/", createUserController);
router.patch("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;
