import express, { Request, Response } from "express";
import { getDatabase } from "./db/createDB";
import { callback } from "./db/callback/callback";

import {
  Up_09_02_24,
  Down_09_02_24,
} from "./db/migrations/09.02.24_create_Movies_with_data";
import {
  Up_13_02_24,
  Down_13_02_24,
} from "./db/migrations/13.02.24_create_Boxoffice_with_data";
import {
  Movies,
  Boxoffice,
} from "./models/table_discription/table_discription";

import {
  selectData,
  orderData,
  limitOrder,
  conditionSelect,
  alterTable,
  groupBy,
  innerJoin,
  leftJoin,
  ratingPercent
} from "./db/utility/utility";

const app = express();
const port = 3000;

const db = getDatabase("./db/test.db");

const movies = new Movies().tableName;
const boxoffice = new Boxoffice().tableName;

// const columnToSelect = "Title, Domestic_sales, International_sales";
const columnToSelect = "Title, Rating";
const removingDuplicates = false;
const sortingDirection = false;



// Up_09_02_24(db);
// Down_09_02_24(db);
// Up_13_02_24(db);
// Down_13_02_24(db);

// selectData(db, tableName, columnToSelect, removingDuplicates, callback);

// orderData(db, tableName, columnToSelect, sortingDirection, callback);

// limitOrder(db, tableName, columnToSelect, callback);

// conditionSelect(db, tableName, columnToSelect, callback);

// alterTable(db, tableName);

// groupBy(db, tableName, columnToSelect, callback);

// innerJoin(db, movies, boxoffice, columnToSelect, callback);

// leftJoin(db, movies, boxoffice, columnToSelect, callback);

ratingPercent(db, movies, boxoffice, columnToSelect, callback);

db.close();

app.get("/", (req: Request, res: Response) => {
  res.send("Слава Україні");
});

// app.listen(port, () => {
//   console.log("Starting");
// });
