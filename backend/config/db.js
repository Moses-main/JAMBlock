import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.LIVE_DATABASE_URL;
// const MONGODB_URI = process.env.MONGODB_URI;
// "mongodb://localhost:27017/myPc";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
