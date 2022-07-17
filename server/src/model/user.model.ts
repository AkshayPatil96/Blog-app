import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema(
    {
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
            default:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_qlz4iIw1GmEkIgoSBOeZe_nC21QTykTHcMiKm1NL86m-wUanka9LESW8bXI__txRyM&usqp=CAU",
        },
        type: {
            type: String,
            default: "normal",
        },
    },
    {
        timestamps: true,
    }
);

const User = model("user", userSchema);

export default User;
