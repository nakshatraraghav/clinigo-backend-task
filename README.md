# Clinigo Backend Task

This is a simple RESTful API for managing a collection of books. It allows users to perform CRUD (Create, Read, Update, Delete) operations on books stored in a MongoDB database.

## About the API

The Books API is a simple RESTful API that allows users to manage a collection of books. It provides endpoints for performing CRUD (Create, Read, Update, Delete) operations on books stored in a MongoDB database. The API is built using Node.js and utilizes the Express framework for handling HTTP requests and routing.

## Installation

To install and run the Sentrimetric API, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `pnpm install`

### Set Up Database

The Books API requires a Mongo database. You can use Docker to run a mongo container or use MongoAtlas
Add the database link to the .env file

### Start the server

Start the server using this command

```
pnpm prod
```

The API server should now be running and accessible at `http://localhost:$PORT`.

Make sure to adjust the Mongo Connection String and PORT details in the `.env` file if you are using custom configurations.

One notable addition to the project is the `zenv` function, which is used to verify and parse the schema file using Zod. This function ensures that the environment variables are properly defined and validated based on the specified schema.

## Docker

To run the application using Docker, follow these steps:

1. Build the Docker image:

```
docker build -t books-api .
```

2. Run the docker container

```
docker run -d -p 3000:1337 books-api
```

## Dependencies:

- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a .env file.
- [express](https://www.npmjs.com/package/express): Web framework for Node.js.
- [helmet](https://www.npmjs.com/package/helmet): Helps secure Express apps by setting various HTTP headers.
- [mongoose](https://www.npmjs.com/package/mongoose): MongoDB object modeling tool.
- [pino](https://www.npmjs.com/package/pino): Fast and opinionated logger for Node.js.
- [pino-pretty](https://www.npmjs.com/package/pino-pretty): Prettifies Pino logs for better readability.
- [uuid](https://www.npmjs.com/package/uuid): Generates UUIDs (Universally Unique Identifiers).
- [zod](https://www.npmjs.com/package/zod): TypeScript-first schema validation library.

## DevDependencies:

- [@types/express](https://www.npmjs.com/package/@types/express): TypeScript definitions for Express.
- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript definitions for Node.js.
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin): ESLint plugin for TypeScript.
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser): ESLint parser for TypeScript.
- [eslint](https://www.npmjs.com/package/eslint): Pluggable linting utility for JavaScript and TypeScript.
- [prettier](https://www.npmjs.com/package/prettier): Opinionated code formatter.
- [tsx](https://www.npmjs.com/package/tsx): TypeScript watch and build tool.
- [typescript](https://www.npmjs.com/package/typescript): JavaScript compiler that provides TypeScript support.

## Package Installer

- [pnpm](https://www.npmjs.com/package/pnpm): Fast, disk space efficient package manager.

## Usage

To run the Books API, you can use the following npm scripts:

- **Development Mode**

  - Run the API server in development mode with automatic restart on file changes:
    ```
    pnpm serve
    ```

- **Production Mode**

  - Build the TypeScript code and start the API server in production mode:
    ```
    pnpm prod
    ```

- **Build**
  - Build the TypeScript code to the `dist` directory:
    ```
    pnpm  build
    ```

## Endpoints

- **Create Book**

  - `POST /api/books`
  - Create a new Book

- **Get Books**

  - `POST /api/books`
  - Get all books

- **Get Book**

  - `POST /api/books/:id`
  - Get details about a specific book

- **Filter Books**

  - `GET /api/books?genre=${somerandomgenre}`
    -Filter By Genre

  - `GET /api/books?year=${year}`
    -Filter By year

  - `GET /api/books?rating=${rating}`
    -Filter By rating

- **Update Books**

  - `PUT /api/books/:id`
  - Update the book

- **Delete Books**
  - `DELETE /api/books/:id`
  - Update the book
