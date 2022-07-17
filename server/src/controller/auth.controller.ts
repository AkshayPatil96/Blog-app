import { Request, Response } from "express";
import User from "../model/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { genAccessToken } from "../config/jwt";

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

            const activeToken = genAccessToken(newUser);

            res.json({
                status: "OK",
                msg: "Register successfully",
                data: newUser,
                active_token: activeToken,
            });
        } catch (error: any) {
            return res.status(500).json({ msg: error.message });
        }
    },
};

export default authController;
