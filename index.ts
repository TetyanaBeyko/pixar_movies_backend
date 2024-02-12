import express, { Request, Response } from "express";
import { getDatabase } from "./db";
import {
  createTable,
  dropTable,
  insertData,
  selectData,
  orderData,
  alterTable,
} from "./db/utility";
import { Down, Up } from "./db/migrations/9.02.24";

const app = express();
const port = 3000;

const db = getDatabase("./db/test.db");

const testTable = "Test";
const moviesTable = "Movies";

const callback = (error: Error, rows: Array<Object>) => {
  if (error) {
    console.error(error);
    return;
  }
  console.debug(rows);
};

Up(db, moviesTable);

// selectData(db, moviesTable, callback);
// orderData(db, moviesTable, callback);
// alterTable(db, moviesTable);

// dropTable(db, moviesTable);
db.close();

app.get("/", (req: Request, res: Response) => {
  res.send("Ktulhu Ftagn");
});

// app.listen(port, () => {
//   console.log("Starting");
// });
