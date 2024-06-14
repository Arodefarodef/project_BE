import { Request, Response, request } from "express";
import deliveryModel from "../model/deliverymodel";

export const createDeliveryGuy = async (req: Request, res: Response) => {
  try {
    const { FullName, email, phone } = req.body;
    const getD = await deliveryModel.create({ name, email, phone });
    res.status(200).json({
      message: "Delivery Guy Created!",
      status: 200,
      data: getD,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};
