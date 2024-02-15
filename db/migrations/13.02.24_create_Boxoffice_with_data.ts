import { Database } from "sqlite3";
import { createTable, insertTable, dropTable } from "../utility/utility";
import { Boxoffice } from "../../models/table_discription/table_discription";
import { Boxoffice_Insert } from "../../models/table_insertion/table_insertion";

const description = new Boxoffice();
const insert = new Boxoffice_Insert();

export function Up_13_02_24(db: Database) {
  const data = [
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

export function Down_13_02_24(db: Database) {
  dropTable(db, description.tableName);
}
