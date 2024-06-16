import { Schema, Types, model } from "mongoose";
import { iDeliveryData } from "../utils/deliveryinter";

// interface iDeliveryData extends iDelivery, Document {}

const deliverymodel = new Schema<iDeliveryData>(
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
