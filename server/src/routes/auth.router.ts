import express from "express";
import authController from "../controller/auth.controller";
import { validateRegister } from "../middleware/validation";
const authRouter = express.Router();

authRouter.post("/register", validateRegister, authController.register);

export default authRouter;
