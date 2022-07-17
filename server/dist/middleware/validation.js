"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegister = void 0;
const validateRegister = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, account, password } = req.body;
    if (!name) {
        return res.status(400).json({ msg: "Please add your name." });
    }
    else if (name.length > 20) {
        return res
            .status(400)
            .json({ msg: "Your name can be 20 characters long." });
    }
    else if (name.length < 3) {
        return res
            .status(400)
            .json({ msg: "Your name can be at least 3 characters long." });
    }
    if (!account) {
        return res
            .status(400)
            .json({ msg: "Please add your email or phone number." });
    }
    else if (!validatePhone(account) && !validateEmail(account)) {
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
});
exports.validateRegister = validateRegister;
const validatePhone = (phone) => {
    const re = /^[+]/g;
    return re.test(phone);
};
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
