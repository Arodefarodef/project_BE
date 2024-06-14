import { Schema, Types, model } from "mongoose";
import { ideliveryData } from "../utils/types";

const deliverymodel = new Schema<ideliveryData>(
  {
    fullName: {
      type: String,
    },
    userame: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    phonenumber: {
      type: String,
    },
    images: [
      {
        type: Types.ObjectId,
        ref: "images",
      },
    ],
  },
  { timestamps: true }
);

export default model("agents", deliverymodel);
