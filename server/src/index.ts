import express, { json, urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import routes from "./routes";

const app = express();

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
    res.send({ msg: "Hello World" });
});
app.use("/auth", routes.authRouter);

// Database
import "./config/database";

// Server listening
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server running at port: ", PORT);
});
