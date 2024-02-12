import express, { Request, Response } from "express";
import { getDatabase } from "./db";
import { Up, Down } from "./db/migrations/9.02.24";
import {
  selectData,
  orderData,
  limitOrder,
  conditionSelect,
  alterTable,
  groupBy
} from "./db/utility";

const app = express();
const port = 3000;

const db = getDatabase("./db/test.db");

const boxOffice = "Boxoffice";
const boxOfficeData = [
  { rating: 8.2, domesticSales: 3808, internationalSales: 43261 },
  { rating: 7.4, domesticSales: 2684, internationalSales: 92764 },
  { rating: 6.0, domesticSales: 2064, internationalSales: 45654 },
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

// selectData(db, moviesTable, columnToSelect, removingDuplicates, callback);

// orderData(db, moviesTable, columnToSelect, sortingDirection, callback);

// limitOrder(db, moviesTable, columnToSelect, callback);

// conditionSelect(db, moviesTable, columnToSelect, callback);

// alterTable(db, moviesTable);

groupBy(db, moviesTable, columnToSelect, callback);

db.close();

app.get("/", (req: Request, res: Response) => {
  res.send("Слава Україні");
});

// app.listen(port, () => {
//   console.log("Starting");
// });
