import type { Request, Response } from "express";
import mongoose from "mongoose";
import logger from "../../libs/logger";
import type {
  createBookBodyType,
  deleteBookParamsType,
  getFilteredBooksQueryType,
  getSingleBookParamsType,
  updateBookParamsType,
} from "./books.schema";
import {
  createBook,
  deleteBook,
  findAndUpdateBook,
  findBookById,
  getFilteredBooks,
} from "./books.service";

export async function getSingleBookHandler(
  req: Request<getSingleBookParamsType, object, object>,
  res: Response
) {
  try {
    const book = await findBookById(req.params.id);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    return res.json(book);
  } catch (error) {
    // Handle any other errors that occurred during the operation
    console.error("An error occurred:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function getFilteredBooksHandler(
  req: Request<object, object, object, getFilteredBooksQueryType>,
  res: Response
) {
  const genre = req.query.genre;
  const year = req.query.year;
  const rating = req.query.rating;

  try {
    if (genre) {
      const books = await getFilteredBooks({ genre });
      return res.json({
        filter: "genre",
        books,
      });
    }

    if (year) {
      if (isNaN(Number(year))) {
        return res.status(400).json({ error: "Invalid year value" });
      }

      const books = await getFilteredBooks({ year: { $gte: Number(year) } });
      return res.json({
        filter: "year",
        books,
      });
    }

    if (rating) {
      if (isNaN(Number(rating))) {
        return res.status(400).json({ error: "Invalid rating value" });
      }

      const books = await getFilteredBooks({
        rating: { $gte: Number(rating) },
      });
      return res.json({
        filter: "rating",
        books,
      });
    }

    const books = await getFilteredBooks({});
    return res.json({
      filter: "none",
      books,
    });
  } catch (error) {
    console.error("An error occurred:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function createBookHandler(
  req: Request<object, object, createBookBodyType>,
  res: Response
) {
  try {
    const book = await createBook(req.body);

    return res.json(book);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.code === 11000 && error.keyPattern.title) {
      return res
        .status(409)
        .json("Please create this book with another name, Book name clash");
    }

    logger.error("An error occurred:", error);
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function deleteBookHandler(
  req: Request<deleteBookParamsType, object, object>,
  res: Response
) {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const result = await deleteBook(id);

    if (!result) {
      return res.status(500).send("Delete failed");
    }

    return res.send("Delete succeded");
  } catch (error) {
    logger.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
export async function updateBookHandler(
  req: Request<updateBookParamsType, object, object>,
  res: Response
) {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const body = req.body;

    const book = await findBookById(id);

    if (!book) {
      return res.status(404).send("Book not found");
    }

    logger.info(book);

    const updatedBook = await findAndUpdateBook({ _id: id }, body, {
      new: true,
    });

    return res.json(updatedBook);
  } catch (error) {
    console.error("An error occurred:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
