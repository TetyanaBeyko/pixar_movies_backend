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
      title: "Pixar movies",
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
 *     summary: Get greetings
 *     description: Endpoint for sending greetings.
 *     responses:
 *       "200":
 *         description: Successful response containing "Hello".
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Hello
 */
app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

/**
 * @openapi
 * /movies:
 *   get:
 *     summary: Get Pixar movies
 *     description: Returns a list of Pixar movies.
 *     parameters:
 *       - name: limit
 *         in: query
 *         description: The maximum number of movies to return.
 *         required: false
 *         schema:
 *           type: integer
 *       - name: offset
 *         in: query
 *         description: The number of movies to skip.
 *         required: false
 *         schema:
 *           type: integer
 *     responses:
 *       "200":
 *         description: A successful response containing a list of movies.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   Title:
 *                     type: string
 *                   Director:
 *                     type: string
 *                   Year:
 *                     type: integer
 *                   Length_minutes:
 *                     type: integer
 *             example:
 *               - id: 1
 *                 Title: Toy Story
 *                 Director: John Lasseter
 *                 Year: 1995
 *                 Length_minutes: 81
 *               - id: 2
 *                 Title: A Bug's Life
 *                 Director: John Lasseter
 *                 Year: 1998
 *                 Length_minutes: 95
 *       "500":
 *         description: Returns error object.
 */
app.get("/movies", (req: Request, res: Response) => {
  let {limit, offset} = req.query;
  let take = limit ? Number(limit) : undefined;
  let skip = offset ? Number(offset) : undefined;
  prisma.movies
    .findMany({take: take, skip: skip})
    .then((movies) => res.status(200).send(movies))
    .catch((error) => res.status(500).send(error));
});

/**
 * @openapi
 * /boxoffice:
 *   get:
 *     summary: Get boxoffice data for Pixar movies
 *     description: Returns boxoffice data for Pixar movies.
 *     responses:
 *       "200":
 *         description: A successful response containing boxoffice data.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   Movie_id:
 *                     type: integer
 *                   Rating:
 *                     type: number
 *                   Domestic_sales:
 *                     type: integer
 *                   International_sales:
 *                     type: integer
 *         example:
 *           - Movie_id: 1
 *             Rating: 8.3
 *             Domestic_sales: 191796233
 *             International_sales: 170162503
 *       "500":
 *         description: Returns error object.
 */
app.get("/boxoffice", (req: Request, res: Response) => {
  prisma.boxoffice
    .findMany()
    .then((boxoffice) => res.status(200).send(boxoffice))
    .catch((error) => res.status(500).send(error));
});

/**
 * @openapi
 * /movie:
 *   post:
 *     summary: Add a new Pixar movie
 *     description: Add a new Pixar movie to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Title:
 *                 type: string
 *               Director:
 *                 type: string
 *               Year:
 *                 type: integer
 *               Length_minutes:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Successfully added a new movie.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 Title:
 *                   type: string
 *                 Director:
 *                   type: string
 *                 Year:
 *                   type: integer
 *                 Length_minutes:
 *                   type: integer
 *       '500':
 *         description: Internal server error.
 * 
 */
app.post("/movie", (req: Request, res: Response) => {
  const movie = req.body;
  prisma.movies
    .create({
      data: movie,
    })
    .then((movie) => res.status(200).send(movie))
    .catch((error) => res.status(500).send(error));
});

app.post("/boxoffice", (req: Request, res: Response) => {
  const movieBoxoffice = req.body;
   prisma.boxoffice
    .create({
      data: movieBoxoffice,
    })
    .then((movieBoxoffice) => res.status(200).send(movieBoxoffice))
    .catch((error) => res.status(500).send(error));
});

app.listen(port, () => {
  console.log(`Starting on ${port}`);
});
