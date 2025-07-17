import express from "express";
import { publicRouter } from "../route/public-api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { userRouter } from "../route/api.js";
import cors from "cors";

export const web = express();
web.use(express.json());
web.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://contact-management-sandy-nu.vercel.app",
    ], // tambahkan frontend URL di sini
    credentials: true,
  })
);

web.use(publicRouter);
web.use(userRouter);

web.use(errorMiddleware);
