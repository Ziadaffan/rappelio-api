import express, { Express } from "express";
import router from "./router/router";
import { connectToDatabase } from "./db/config/database";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { validateApiKey } from "./middleware/validateApiKey";

dotenv.config();

const app: Express = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Database connection middleware
connectToDatabase();

// Routes
app.use("/api", router);

// Pour le développement local uniquement
if (process.env.NODE_ENV === "development") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}

// Pour Vercel
export default app;
