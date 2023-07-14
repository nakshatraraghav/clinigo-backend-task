import { z } from "zod";

const body = z.object({
  title: z.string(),
  author: z.string(),
  genre: z.string(),
  year: z.number().positive().max(new Date().getFullYear()),
  rating: z.number().positive().min(0).max(5),
});

const params = z.object({
  id: z.string(),
});

const query = z.object({
  genre: z.string().optional(),
  year: z.string().optional(),
  rating: z.string().optional(),
});

const updateBody = z.object({
  title: z.string().optional(),
  author: z.string().optional(),
  genre: z.string().optional(),
  year: z.number().positive().max(new Date().getFullYear()).optional(),
  rating: z.number().positive().min(0).max(5).optional(),
});

export const createBookSchema = z.object({
  body,
});

export const deleteBookSchema = z.object({
  params,
});

export const getSingleBookSchema = z.object({
  params,
});

export const getFilteredBooksSchema = z.object({
  query,
});

export const updateBookSchema = z.object({
  body: updateBody,
  params,
});

export type createBookBodyType = z.infer<typeof createBookSchema>["body"];
export type deleteBookParamsType = z.infer<typeof deleteBookSchema>["params"];
export type getSingleBookParamsType = z.infer<
  typeof getSingleBookSchema
>["params"];
export type getFilteredBooksQueryType = z.infer<
  typeof getFilteredBooksSchema
>["query"];
export type updateBookParamsType = z.infer<typeof updateBookSchema>["params"];
