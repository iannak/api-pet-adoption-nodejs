import express from "express";
import adopterRouter from "../routes/adopterRouter";
import petRouter from "../routes/petRouter";
const router = (app: express.Router) => {
  app.use("/pets", petRouter);
  app.use("/adotantes", adopterRouter);
};
export default router;
