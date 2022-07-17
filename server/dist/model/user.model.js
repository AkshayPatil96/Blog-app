"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please add your name."],
        trim: true,
        maxLength: [20, "You name can be maximum 20 characters long."],
    },
    account: {
        type: String,
        required: [true, "Please add your email or phone number."],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please add your password."],
        trim: true,
    },
    avatar: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_qlz4iIw1GmEkIgoSBOeZe_nC21QTykTHcMiKm1NL86m-wUanka9LESW8bXI__txRyM&usqp=CAU",
    },
    type: {
        type: String,
        default: "normal",
    },
}, {
    timestamps: true,
});
const User = (0, mongoose_1.model)("user", userSchema);
exports.default = User;
