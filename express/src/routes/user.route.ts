import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  loginController,
  updateUserController,
} from "../controllers/user.controller";
import { validateBody, validateNumberParams } from "../middlewares/validateDto";
import { userDto } from "../dto/user.dto";
const router = Router();

router.post("/", validateBody(userDto), createUserController);
router.post("/login", loginController);
router.patch("/:id", validateNumberParams(), updateUserController);
router.delete("/:id", validateNumberParams(), deleteUserController);

export default router;
