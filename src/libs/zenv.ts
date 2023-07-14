import { z } from "zod";
import { config } from "dotenv";
import logger from "./logger";

config();

const schema = z.object({
  PORT: z.string(),
  CONNECTION_STRING: z.string().url(),
});

function zenv() {
  try {
    const env = schema.parse(process.env);
    logger.info("environment variables parsed and loaded");
    return env;
  } catch (error) {
    logger.error("failed to parse env variables");
    process.exit(1);
  }
}

const env = zenv();

export default env;
