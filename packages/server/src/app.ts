import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";

// middlewares

// routes
import routes from "./routes";

config();

const app = express();

// main middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*", // got to change it for production
  })
);

app.use("/api", routes);

export default app;
