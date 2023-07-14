import mongoose from "mongoose";

export interface Book {
  title: string;
  author: string;
  genre: string;
  year: number;
  rating: number;
}

const booksSchema = new mongoose.Schema<Book>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const booksModel = mongoose.model<Book>("books", booksSchema);

export default booksModel;
