import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routers/auth";
import routerCategory from "../src/routers/category";
import routerProduct from "../src/routers/products";
import uploadRouter from "./routers/upload";

const app = express();

//middleware
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/api", authRouter);
app.use("/api", routerCategory);
app.use("/api", routerProduct);
app.use("/api", uploadRouter);

mongoose.connect(process.env.MONGODB_CONNECTION);

export const viteNodeApp = app;
