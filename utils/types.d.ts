import { Document } from "mongoose";

export interface idelivery {
    fullName: string;
    userame: string;
    password: string;
    email: string;
    address: string;
    phonenumber: string;
    images: Array<{}>;
}

export interface ideliveryData extends idelivery, Document {}