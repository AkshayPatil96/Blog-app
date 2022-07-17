import { Request, Response } from "express";
import User from "../model/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { genAccessToken, genRefreshToken } from "../config/jwt";
import sendEmail from "../config/sendMail";
import { validateEmail, validatePhone } from "../middleware/validation";
import { IDecodedToken, InitUser } from "../config/interface";

const CLIENT_URL = `${process.env.BASE_URL}`;

const authController = {
    register: async (req: Request, res: Response) => {
        try {
            const { name, account, password } = req.body;

            const user = await User.findOne({ account });
            if (user) {
                return res
                    .status(400)
                    .json({ msg: "Email or Number already exists" });
            }

            const passwordHashed = await bcrypt.hash(password, 10);

            const newUser = new User({
                name,
                account,
                password: passwordHashed,
            });

            await newUser.save();

            res.json({
                status: "OK",
                msg: "Register successfully",
                data: newUser,
            });
        } catch (error: any) {
            return res.status(500).json({ msg: error.message });
        }
    },
    login: async (req: Request, res: Response) => {
        try {
            const { account, password } = req.body;

            const user = await User.findOne({ account });
            if (!user)
                return res
                    .status(400)
                    .json({ msg: "User does not exist please register" });

            loginUser(user, password, res);
        } catch (error: any) {
            return res.status(500).json({ msg: error.message });
        }
    },
    logout: async (req: Request, res: Response) => {
        try {
            res.clearCookie("refreshtoken", { path: `/auth/refresh_token` });
            return res.json({ msg: "Logged out!" });
        } catch (error: any) {
            return res.status(500).json({ msg: error.message });
        }
    },
    refreshToken: async (req: Request, res: Response) => {
        try {
            const refToken = req.cookies.refreshtoken;
            if (!refToken)
                return res.status(400).json({ msg: "Please Login!" });

            const decoded = <IDecodedToken>(
                jwt.verify(refToken, `${process.env.REFRESH_TOKEN_SECRET}`)
            );

            if (!decoded) return res.status(400).json({ msg: "Please Login!" });

            const user = await User.findById(decoded.id).select("-password");
            if (!user) return res.status(400).json({ msg: "Please Login!" });

            const access_token = genAccessToken({ id: user._id });

            res.json({ msg: "Success!", access_token });
        } catch (error: any) {
            return res.status(500).json({ msg: error.message });
        }
    },
};

const loginUser = async (user: InitUser, password: string, res: Response) => {
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(500).json({ msg: "Password is incorrect" });

    const access_token = genAccessToken({ id: user._id });
    const refresh_token = genRefreshToken({ id: user._id });

    res.cookie("refreshtoken", refresh_token, {
        httpOnly: true,
        path: `/auth/refresh_token`,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.json({
        msg: "Login Successfull!",
        access_token,
        user: { ...user._doc, password: "" },
    });
};

export default authController;
