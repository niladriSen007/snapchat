import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | null = null;
export const connectToDatabase = async () => {
  if (cachedConnection) {
    console.log("Using existing database connection");
    return cachedConnection;
  }
  try {
    const connection = await mongoose.connect(
      process.env.MONGO_URI as string
    );
    cachedConnection = connection.connection;
    console.log("Connected to new database connection");
  } catch (error) {
    console.error("Error connecting to database: ", error);
  }
};
