import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const port = process.env.PORT || 5000;

try {
  await mongoose.connect(process.env.MONGODB_URL);
  app.listen(port, () => {
    console.log(`server mongoDB running ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

// .config({ path: '../.env' });