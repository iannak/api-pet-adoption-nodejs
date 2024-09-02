import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./config/database/dataSource";
import router from "./routes";

const app = express();
app.use(express.json());
router(app);

AppDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!");
}).catch((err) => {
  console.error("Error during Data Source initialization:", err);
});

export default app;
