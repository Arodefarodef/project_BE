import { Document, Schema, model } from "mongoose";
import { iAdmin } from "../utils/types";
interface iAdminData extends iAdmin, Document {}
const adminModel = model<iAdminData>(
  "admins",
  new Schema(
    {
      Fname: {
        type: String,
      },
      Lname: {
        type: String,
      },
      email: {
        type: String,
        require: true,
      },
      password: {
        type: String,
      },
      phone: {
        type: String,
      },
      verify: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
  )
);

export default adminModel;
