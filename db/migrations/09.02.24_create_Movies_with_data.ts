import { Database } from "sqlite3";
import { createTable, dropTable, insertTable } from "../utility/utility";
import { Movies } from "../../models/table_discription/table_discription";
import { Movies_Insert } from "../../models/table_insertion/table_insertion";

const description = new Movies();
const insert = new Movies_Insert();

export function Up_09_02_24(db: Database) {
  const data = [
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
    createTable(db, description.tableName, description.createSpecification());
    insertTable(
      db,
      description.tableName,
      insert.createSpecification(),
      insert.createArrayValues,
      data
    );
  });
}

export function Down_09_02_24(db: Database) {
  dropTable(db, description.tableName);
}
