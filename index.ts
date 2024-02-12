import express, { Request, Response } from "express";
import { getDatabase } from "./db";
import { Up, Down } from "./db/migrations/9.02.24";
import {
  selectData,
  orderData,
  limitOrder,
  conditionSelect,
  alterTable,
  groupBy,
  createBoxoffice,
  insertBoxoffice,
} from "./db/utility";

const app = express();
const port = 3000;

const db = getDatabase("./db/test.db");

const boxofficeTable = "Boxoffice";
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

const moviesTable = "Movies";

const columnToSelect = "Director";
const removingDuplicates = false;
const sortingDirection = false;

const callback = (error: Error, rows: Array<Object>) => {
  if (error) {
    console.error(error);
    return;
  }
  console.debug(rows);
};

// Up(db, moviesTable);
// Down(db,moviesTable);

// createBoxoffice(db, boxofficeTable);

// insertBoxoffice(db, boxofficeTable, boxofficeData);

// selectData(db, moviesTable, columnToSelect, removingDuplicates, callback);

// orderData(db, moviesTable, columnToSelect, sortingDirection, callback);

// limitOrder(db, moviesTable, columnToSelect, callback);

// conditionSelect(db, moviesTable, columnToSelect, callback);

// alterTable(db, moviesTable);

// groupBy(db, moviesTable, columnToSelect, callback);

db.close();

app.get("/", (req: Request, res: Response) => {
  res.send("Слава Україні");
});

// app.listen(port, () => {
//   console.log("Starting");
// });
