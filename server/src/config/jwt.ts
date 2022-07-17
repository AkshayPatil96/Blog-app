import jwt from "jsonwebtoken";

export const genActiveToken = (payload: object) => {
    return jwt.sign(payload, `${process.env.ACTIVE_TOKEN_SECRET}`, {
        expiresIn: "5m",
    });
};

export const genAccessToken = (payload: object) => {
    return jwt.sign(payload, `${process.env.ACCESS_TOKEN_SECRET}`, {
        expiresIn: "15m",
    });
};
export const genRefreshToken = (payload: object) => {
    return jwt.sign(payload, `${process.env.REFRESH_TOKEN_SECRET}`, {
        expiresIn: "1w",
    });
};
