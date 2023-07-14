import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import booksModel, { Book } from "./books.model";
import { createBookBodyType } from "./books.schema";

export async function createBook(input: createBookBodyType) {
  return (await booksModel.create(input)).toJSON();
}

export async function deleteBook(id: string) {
  const result = booksModel.findByIdAndDelete(id);

  return result;
}

export async function findBookById(id: string) {
  const book = await booksModel.findById(id);

  return book;
}

export async function getFilteredBooks(query: FilterQuery<Book>) {
  const books = await booksModel.find(query);

  return books;
}

export async function findAndUpdateBook(
  query: FilterQuery<Book>,
  update: UpdateQuery<Book>,
  options: QueryOptions
) {
  return booksModel.findOneAndUpdate(query, update, options);
}
