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
} from "./db/utility/utility";

const app = express();
const port = 3000;

const db = getDatabase("./db/test.db");

const columnToSelect = "Director";
const removingDuplicates = false;
const sortingDirection = false;

// Up_09_02_24(db);
// Down_09_02_24(db);

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
