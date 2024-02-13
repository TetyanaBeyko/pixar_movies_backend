import express, { Request, Response } from "express";
import { getDatabase } from "./db/createDB";
import { Up, Down } from "./db/migrations/9.02.24";
import { callback } from "./db/callback/callback";
import { Movies, Boxoffice } from "./models/table_discription/table_discription";
import {
  selectData,
  orderData,
  limitOrder,
  conditionSelect,
  alterTable,
  groupBy,
  // createBoxoffice,
  insertBoxoffice,
  createTable
} from "./db/utility/utility";

const app = express();
const port = 3000;

const db = getDatabase("./db/test.db");

const boxofficeData = [
  {
    movieID: 1,
    rating: 8.3,
    domesticSales: 191796233,
    internationalSales: 170162503,
  },
  {
    movieID: 2,
    rating: 7.2,
    domesticSales: 162798565,
    internationalSales: 200600000,
  },
  {
    movieID: 3,
    rating: 7.9,
    domesticSales: 245852179,
    internationalSales: 239163000,
  },
  {
    movieID: 4,
    rating: 8.1,
    domesticSales: 289916256,
    internationalSales: 272900000,
  },
  {
    movieID: 5,
    rating: 8.2,
    domesticSales: 380843261,
    internationalSales: 555900000,
  },
];

const tableName = {
  movies: "Movies",
  boxoffice: "Boxoffice",
};

const columnToSelect = "Director";
const removingDuplicates = false;
const sortingDirection = false;


const moviesDescription = new Movies().createSpecification();
const boxofficeDescription = new Boxoffice().createSpecification();

createTable(db, tableName.movies, moviesDescription);
createTable(db, tableName.boxoffice, boxofficeDescription);


// Up(db, tableName.movies);
// Down(db, tableName.boxoffice);

// createBoxoffice(db, tableName.boxoffice);

// insertBoxoffice(db, tableName.boxoffice, boxofficeData);

// selectData(db, tableName.movies, columnToSelect, removingDuplicates, callback);

// orderData(db, tableName.movies, columnToSelect, sortingDirection, callback);

// limitOrder(db, tableName.movies, columnToSelect, callback);

// conditionSelect(db, tableName.movies, columnToSelect, callback);

// alterTable(db, tableName.movies);

// groupBy(db, tableName.movies, columnToSelect, callback);

db.close();

app.get("/", (req: Request, res: Response) => {
  res.send("Слава Україні");
});

// app.listen(port, () => {
//   console.log("Starting");
// });
