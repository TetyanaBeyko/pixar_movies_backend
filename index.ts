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

const app = express();
const port = 3000;

const db = getDatabase("./db/test.db");

const tableName = "testTable";

const testData = [
  [1, "Toy Story", "John Lasseter", 1995],
  [2, "A Bug's Life", "John Lasseter", 1998],
  [3, "Toy Story 2", "John Lasseter", 1999],
  [4, "Monsters, Inc.", "Pete Docter", 2001],
  [5, "Finding Nemo", "Andrew Stanton", 2003],
  [6, "The Incredibles", "Brad Bird", 2004],
];

// createTable({db, tableName});
// insertData({db, tableName, testData});

const callback = (error: Error, rows: Array<Object>) => {
  if (error) {
    console.error(error);
    return;
  }
  console.debug(rows);
}

selectData({db, tableName, callback});
// orderData({db, tableName});
// alterTable({db, tableName});

// dropTable({db, tableName});
// db.close();

app.get("/", (req: Request, res: Response) => {
  res.send("Ktulhu Ftagn");
});

// app.listen(port, () => {
//   console.log("Starting");
// });
