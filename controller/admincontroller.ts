import { Request, Response } from "express";
import bcrypt from "bcrypt";
import deliverymodel from "../model/deliverymodel";
import { sendMail } from "../utils/enam";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phone } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const getD = await deliverymodel.create({
      name,
      email,
      password: hashed,
      phone,
    });
    await sendMail(getD);
    res.status(200).json({
      message: "User created successfully!",
      data: getD,
      status: 200,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const { Id } = req.params;
    const getD = await deliverymodel.findByIdAndUpdate(
      Id,
      { verify: true },
      { new: true }
    );
    res.status(200).json({
      message: "User Verified",
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

export const viewOne = async (req: Request, res: Response) => {
  try {
    const { Id } = req.params;
    const getD = await deliverymodel.findById(Id);
    res.status(200).json({
      message: "User Found",
      data: getD,
      status: 200,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Error Occured",
      status: 400,
    });
  }
};

export const viewAll = async (req: Request, res: Response) => {
  try {
    const getD = await adminModel.find();
    res.status(200).json({
      message: "All Users",
      status: 200,
      data: getD,
    });
  } catch (error: any) {
    res.status(200).json({
      message: "Error Occured",
      status: 400,
    });
  }
};
