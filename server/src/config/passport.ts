import { Request } from "express";
import { VerifyCallback } from "passport-google-oauth2";
import User from "../model/user.model";
import { InitUser } from "./interface";
import { genAccessToken, genRefreshToken } from "./jwt";

const passport = require("passport");
const { v4: uuid } = require("uuid");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:8000/auth/google/callback",
            passReqToCallback: true,
        },
        async function (
            request: Request,
            accessToken: string,
            refreshToken: string,
            profile: any,
            done: VerifyCallback
        ) {
            const email = profile?._json?.email;
            const username = profile?._json?.name.split(" ")[0] + uuid(4);
            const password = uuid(10);

            let savedUser;

            try {
                const existingUser = await User.findOne({ email });

                if (!existingUser) {
                    const user = new User({
                        name: username,
                        account: email,
                        password,
                    });

                    savedUser = await user.save();
                }
                const accessT = await genAccessToken({savedUser._id});
                const refreshT = await genRefreshToken({savedUser._id});

                return done(null, { accessT, refreshT });
            } catch (error) {
                console.log("error: ", error);
            }
            // });
        }
    )
);

passport.serializeUser((user: any, done: VerifyCallback) => {
    done(null, user);
});

passport.deserializeUser((user: any, done: VerifyCallback) => {
    done(null, user);
});


export const googleOAuth = passport.authenticate("google", { scope: ["email", "profile"] }),

export const googleCallback = passport.authenticate("google", {
        failureRedirect: "/auth/google/failure",
    }),
