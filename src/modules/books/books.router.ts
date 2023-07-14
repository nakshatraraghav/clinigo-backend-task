import { Router } from "express";

import {
  getSingleBookSchema,
  getFilteredBooksSchema,
  createBookSchema,
  deleteBookSchema,
  updateBookSchema,
} from "./books.schema";
import validate from "../../middlewares/validate";

import {
  getSingleBookHandler,
  getFilteredBooksHandler,
  createBookHandler,
  deleteBookHandler,
  updateBookHandler,
} from "./books.controller";

const router = Router();

router.get("/:id", [validate(getSingleBookSchema)], getSingleBookHandler);

router.get("/", [validate(getFilteredBooksSchema)], getFilteredBooksHandler);

router.post("/", [validate(createBookSchema)], createBookHandler);

router.put("/:id", [validate(updateBookSchema)], updateBookHandler);

router.delete("/:id", [validate(deleteBookSchema)], deleteBookHandler);

export default router;
