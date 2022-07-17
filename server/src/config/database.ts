import mongoose, { mongo } from "mongoose";

const URI = process.env.MONGODB_URL;

mongoose.connect(
    `${URI}`,
    // {
    //     useCreateIndex: true,
    //     useFindAndModify: true,
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // },
    (error) => {
        if (error) throw error;
        console.log("Mongodb connected");
    }
);
