// import { connect, connection } from "mongoose";

// export const connectToDb = async () => {
//   try {
//     connect(process.env.MONGODB_URL!);
//     // const connection = connection;

//     connection.on("connected", () => {
//       console.log("MongoDB connected successfully");
//     });
//     connection.on("error", (err) => {
//       console.log("MongoDB connection error. Error details : ", err);
//     });
//   } catch (error) {
//     console.log("Something went wrong, while connecting to DB");
//     console.error(error);
//   }
// };

import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log("MongoDB connection error" + err);
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
}
