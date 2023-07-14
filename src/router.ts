import type { Express, Request, Response } from "express";

import booksRouter from "./modules/books/books.router";

export default function router(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    return res.json("ok");
  });

  app.use("/api/books", booksRouter);
}
