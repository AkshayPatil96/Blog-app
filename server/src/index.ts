import express, {
    json,
    NextFunction,
    Request,
    Response,
    urlencoded,
} from "express";
import cookieParser from "cookie-parser";
// import session from "express-session";
// import passport from "passport";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

import routes from "./routes";

const app = express();

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));
dotenv.config();
app.use(
    cors({
        origin: ["http://localhost:3000", "http://localhost:8000"],
        credentials: true,
    })
);
app.use(morgan("dev"));
app.use(cookieParser());
// app.use(session({ secret: "cats" }));
// app.use(passport.initialize());
// app.use(passport.session());

// Routes
app.get("/", (req: Request, res: Response) => {
    res.send({ msg: "Hello World" });
});

app.use("/auth", routes.authRouter);

// Error Handling
app.use(async (req: Request, res: Response, next: NextFunction) => {
    const error: any = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        },
    });
});

// Database
import "./config/database";

// Server listening
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("Server running at port: ", PORT);
});
