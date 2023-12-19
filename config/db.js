import mongoose from "mongoose";
const baseUrl = "0.0.0.0:27017";

export const connectToDb = async () => {
  try {
    await mongoose.connect(`mongodb://${baseUrl}/hospital`);
    console.log("MongoDB connected using mongoose");
  } catch (err) {
    console.log(err);
  }
};
