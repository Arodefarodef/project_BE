import { Document } from "mongoose";

export interface iDelivery {
  fullName: string;
  userame: string;
  password: string;
  email: string;
  address: string;
  phonenumber: string;
  images: Array<{}>;
}

export interface iDeliveryData extends iDelivery, Document {}
