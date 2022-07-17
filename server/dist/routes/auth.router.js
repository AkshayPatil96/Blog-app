"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = __importDefault(require("../controller/auth.controller"));
const validation_1 = require("../middleware/validation");
const authRouter = express_1.default.Router();
authRouter.post("/register", validation_1.validateRegister, auth_controller_1.default.register);
exports.default = authRouter;
