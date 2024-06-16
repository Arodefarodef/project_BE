import { connect } from "mongoose";

export const dbconfig = async () => {
  try {
    await connect(process.env.URL).then(() => {
      console.log("connected");
    });
  } catch (error) {
    console.error(error);
  }
};
