import { connect, connection } from "mongoose";

export const connectToDb = async () => {
  try {
    connect(process.env.MONGODB_URL!);
    // const connection = connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    connection.on("error", (err) => {
      console.log("MongoDB connection error. Error details : ", err);
    });
  } catch (error) {
    console.log("Something went wrong, while connecting to DB");
    console.error(error);
  }
};
