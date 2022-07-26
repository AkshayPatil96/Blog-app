import express from "express";
// import { googleCallback, googleOAuth } from "../config/passport";
import authController from "../controller/auth.controller";
import { validateRegister } from "../middleware/validation";
const authRouter = express.Router();

authRouter.post("/register", validateRegister, authController.register);

authRouter.post("/login", authController.login);

authRouter.get("/logout", authController.logout);

authRouter.get("/refresh_token", authController.refreshToken);

// authRouter.get("/google", googleOAuth);

// authRouter.get("/google/callback", googleCallback, authController.callback);

// authRouter.get("/google/failure", authController.OAuthFailure);

export default authRouter;
