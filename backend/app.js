import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(
    {
        origin : [""],
        method : ["POST"."GET"],
        credentials: true
    }
));
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose.connect('mongodb+srv://pnv:wRxeT9qAIN34trGf@cluster0.0ekzew7.mongodb.net/Blog?retryWrites=true&w=majority')
    .then(() => app.listen(5000)).then(() =>
        console.log("Connected to database")
    ).catch((err) => console.log(err));
