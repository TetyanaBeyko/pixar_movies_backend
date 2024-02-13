import { Database } from "sqlite3";
import { createMovies, dropTable, insertMovie } from "../utility/utility";

export function Up(db: Database, tableName: string) {
  const testData = [
    { title: "Toy Story", director: "John Lasseter", year: 1995 },
    {
      title: "A Bug's Life",
      director: "John Lasseter",
      year: 1998,
    },
    {
      title: "Toy Story 2",
      director: "John Lasseter",
      year: 1999,
    },
    {
      title: "Monsters, Inc.",
      director: "Pete Docter",
      year: 2001,
    },
    {
      title: "Finding Nemo",
      director: "Andrew Stanton",
      year: 2003,
    },
    {
      title: "The Incredibles",
      director: "Brad Bird",
      year: 2004,
    },
  ];

  db.serialize(() => {
    createMovies(db, tableName);
    insertMovie(db, tableName, testData);
  });
}

export function Down(db: Database, tableName: string) {
  dropTable(db, tableName);
}
