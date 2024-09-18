import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.listen(7000, () => {
  console.log("server running on localhost:7000");
});