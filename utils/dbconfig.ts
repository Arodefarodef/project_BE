import { connect } from "mongoose";

export const dbconfig = async () => {
  try {
    await connect().then(() => {
      console.log("connected");
    });
  } catch (error) {
    console.error(error);
  }
};
