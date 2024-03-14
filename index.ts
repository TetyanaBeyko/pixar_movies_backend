import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();
app.use(bodyParser.json());
const port = 3000;
const prisma = new PrismaClient();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hello World",
      version: "1.0.0",
    },
  },
  apis: ["./index.ts"], // files containing annotations as above
};

const swaggerSpecification = swaggerJSDoc(options);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecification));

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns "Hello".
 */
app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

/**
 * @openapi
 * /movies:
 *   get:
 *     description: GET Pixar movies from database
 *     responses:
 *       200:
 *         description: Returns movies.
 *       500:
 *         description: Returns error object.
 */
app.get("/movies", (req: Request, res: Response) => {
  prisma.movies
    .findMany()
    .then((movies) => res.status(200).send(movies))
    .catch((error) => res.status(500).send(error));
});

app.get("/boxoffice", (req: Request, res: Response) => {
  prisma.boxoffice
    .findMany()
    .then((boxoffice) => res.status(200).send(boxoffice))
    .catch((error) => res.status(500).send(error));
});

app.post("/movie", (req: Request, res: Response) => {
  const movie = req.body;
  console.log(req.params);
  console.log(movie);
  prisma.movies
    .create({
      data: movie,
    })
    .then((movie) => res.status(200).send(movie))
    .catch((error) => res.status(500).send(error));
});

app.get("/movies", (req: Request, res: Response) => {
  prisma.movies
    .findMany({
      take: 3,
    })
    .then((movies) => res.status(200).send(movies))
    .catch((error) => res.status(500).send(error));
});

app.listen(port, () => {
  console.log("Starting");
});
