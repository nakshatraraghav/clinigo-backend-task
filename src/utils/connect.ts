import mongoose from "mongoose";
import env from "../libs/zenv";
import logger from "../libs/logger";

export default async function connect() {
  try {
    await mongoose.connect(env.CONNECTION_STRING);
    logger.info("server connected to database");
  } catch (error) {
    logger.error("server failed to conect to database");
    process.exit(1);
  }
}
