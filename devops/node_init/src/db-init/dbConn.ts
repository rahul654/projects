import * as dotenv from 'dotenv';
dotenv.config({ override: true });
import mongoose from "mongoose";
import logger from "../utils/logger";

export const createConnection = async () => {
  const uri = process.env.MY_MONGO_URL;
  try {
    await mongoose.connect(uri!);
    logger.info('Connected to MongoDB');
  } catch (error) {
    console.error('error: ', error);
  }
};

export const disconnect = () => {
  mongoose.disconnect();
};
