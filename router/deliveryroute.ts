import { Router } from "express";
import {
  createDeliveryGuy,
  deleteDeliveryGuy,
  viewAllDeliverGuy,
} from "../controller/deliverycontroller";

const routes = Router();

routes.route("/create").post(createDeliveryGuy);
routes.route("/viwe").post(viewAllDeliverGuy);
routes.route("/delete").post(deleteDeliveryGuy);

export default routes;
