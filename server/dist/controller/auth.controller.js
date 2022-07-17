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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../model/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const authController = {
    register: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name, account, password } = req.body;
            const user = yield user_model_1.default.findOne({ account });
            if (user) {
                return res
                    .status(400)
                    .json({ msg: "Email or Number already exists" });
            }
            const passwordHashed = yield bcrypt_1.default.hash(password, 10);
            const newUser = new user_model_1.default({
                name,
                account,
                password: passwordHashed,
            });
            res.json({
                status: "OK",
                msg: "Register successfully",
                data: newUser,
            });
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }),
};
exports.default = authController;
