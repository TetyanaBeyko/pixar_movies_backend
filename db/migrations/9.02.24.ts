import { Database } from "sqlite3";
import { createTable, dropTable, insertData } from "../utility";

const moviesTable = "Movies";

export function Up(db: Database) {
  const testData = [
    [1, "Toy Story", "John Lasseter", 1995],
    [2, "A Bug's Life", "John Lasseter", 1998],
    [3, "Toy Story 2", "John Lasseter", 1999],
    [4, "Monsters, Inc.", "Pete Docter", 2001],
    [5, "Finding Nemo", "Andrew Stanton", 2003],
    [6, "The Incredibles", "Brad Bird", 2004],
  ];

  createTable({ db, tableName: moviesTable });
  insertData({ db, tableName: moviesTable, testData });
}

export function Down (db: Database) {
    dropTable({db, tableName: moviesTable})
}