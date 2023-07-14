import express from "express";

import helmet from "helmet";

import logger from "./libs/logger";
import env from "./libs/zenv";
import connect from "./utils/connect";
import router from "./router";

const app = express();

app.use(express.json());
app.use(helmet());

connect();
router(app);

app.listen(env.PORT, () => {
  logger.info(`server started on localhost:${env.PORT}`);
});
