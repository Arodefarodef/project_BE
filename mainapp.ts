import { Application } from "express";
import routes from "./router/deliveryroute";
import router from "./router/adminrouter";

export const mainApp = (app: Application) => {
  app.use("/", routes);
  app.use("/api", router);
};
