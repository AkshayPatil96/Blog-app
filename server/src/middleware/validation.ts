import { Request, Response, NextFunction } from "express";

export const validateRegister = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, account, password } = req.body;

    if (!name) {
        return res.status(400).json({ msg: "Please add your name." });
    } else if (name.length > 20) {
        return res
            .status(400)
            .json({ msg: "Your name can be 20 characters long." });
    } else if (name.length < 3) {
        return res
            .status(400)
            .json({ msg: "Your name can be at least 3 characters long." });
    }

    if (!account) {
        return res
            .status(400)
            .json({ msg: "Please add your email or phone number." });
    } else if (!validatePhone(account) && !validateEmail(account)) {
        return res
            .status(400)
            .json({ msg: "Email or Phone number format is incorrect." });
    }

    if (password.length < 6) {
        return res
            .status(400)
            .json({ msg: "Password must be at least 6 characters." });
    }
    next();
};

export const validatePhone = (phone: string) => {
    const re = /^[+]/g;
    return re.test(phone);
};

export const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
