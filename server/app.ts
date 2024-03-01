import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";

dotenv.config();
const app: Express = express();

const mongoDbUrl: string = process.env.MONGODB_URL as string;
mongoose.connect(mongoDbUrl);
const db = mongoose.connection;

db.on("open", () => {
  console.log("connected...");
});

// Handle MongoDB connection error
db.on("error", (error) => {
  console.error("Error connecting to MongoDB:", error);
});

app.use(express.json());

import recipeRouter from "./routes/recipes";
app.use("/recipes", recipeRouter);

app.listen(3000, () => {
  console.log("server started");
});
