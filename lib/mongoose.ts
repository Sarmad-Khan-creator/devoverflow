import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  if (!process.env.MONGODB_URL) {
    return console.log("Missing MONGODB URL");
  }

  if (isConnected) {
    console.log("Already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devOverFlow",
    });

    mongoose.set("strictQuery", true);

    isConnected = true;
    console.log("Connected");
  } catch (error) {
    console.log("Error while connecting to database", error);
  }
};
