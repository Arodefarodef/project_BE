import { Application } from "express";
import routes from "./router/deliveryroute";

export const mainApp = (app: Application) => {
  app.use("/", routes);
};
