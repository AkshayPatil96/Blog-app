import express from "express";
import authController from "../controller/auth.controller";
import { validateRegister } from "../middleware/validation";
const authRouter = express.Router();

authRouter.post("/register", validateRegister, authController.register);

authRouter.post("/login", authController.login);

authRouter.get("/logout", authController.logout);

authRouter.get("/refresh_token", authController.refreshToken);

export default authRouter;
