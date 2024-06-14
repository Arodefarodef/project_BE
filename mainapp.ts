import { Application } from "express";

export const mainApp = (app: Application) => {
  app.use("/");
};
