import { Database } from "sqlite3";

export function createTable(db: Database, tableName: string, model: string) {

  db.run(
    `CREATE TABLE IF NOT EXISTS ${tableName} ${model}`
  );
}

export function createMovies(db: Database, tableName: string) {
  db.run(
    `CREATE TABLE IF NOT EXISTS ${tableName} (id INTEGER PRIMARY KEY AUTOINCREMENT, Title TEXT, Director TEXT, Year INTEGER)`
  );
}

export function createBoxoffice(db: Database, tableName: string) {
  db.run(
    `CREATE TABLE IF NOT EXISTS ${tableName} (MovieID INTEGER PRIMARY KEY, Rating INTEGER, Domestic_sales INTEGER, International_sales INTEGER)`
  );
}

export function insertMovie(
  db: Database,
  tableName: string,
  data: { title: string; director: string; year: number }[]
) {
  data.map((obj) =>
    db.run(
      `INSERT INTO ${tableName} (Title, Director, Year) VALUES (?, ?, ?)`,
      [obj.title, obj.director, obj.year]
    )
  );
}

export function insertBoxoffice(
  db: Database,
  tableName: string,
  data: {
    movieID: number;
    rating: number;
    domesticSales: number;
    internationalSales: number;
  }[]
) {
  data.map((obj) =>
    db.run(
      `INSERT INTO ${tableName} (MovieID, Rating, Domestic_sales, International_sales) VALUES (?, ?, ?, ?)`,
      [obj.movieID, obj.rating, obj.domesticSales, obj.internationalSales]
    )
  );
}

export function dropTable(db: Database, tableName: string) {
  db.run(`DROP TABLE IF EXISTS ${tableName}`);
}

export function selectData(
  db: Database,
  tableName: string,
  columnToSelect: string,
  removingDuplicates: boolean,
  callback: CallableFunction
) {
  const distinct = removingDuplicates ? "DISTINCT" : "";
  db.all(`SELECT ${distinct} ${columnToSelect} FROM ${tableName}`, callback);
}

export function conditionSelect(
  db: Database,
  tableName: string,
  columnToSelect: string,
  callback: CallableFunction
) {
  db.all(
    `SELECT * FROM ${tableName} WHERE ${columnToSelect} BETWEEN 2000 AND 2010`,
    callback
  );
}

export function orderData(
  db: Database,
  tableName: string,
  columnToSelect: string,
  sortingDirection: boolean,
  callback: CallableFunction
) {
  const direction = sortingDirection ? "ASC" : "DESC";
  db.all(
    `SELECT * FROM ${tableName} ORDER BY ${columnToSelect} ${direction}`,
    callback
  );
}

export function limitOrder(
  db: Database,
  tableName: string,
  columnToSelect: string,
  callback: CallableFunction
) {
  db.all(
    `SELECT * FROM ${tableName} ORDER BY ${columnToSelect} DESC LIMIT 4 OFFSET 2`,
    callback
  );
}

export function groupBy(
  db: Database,
  tableName: string,
  columnToSelect: string,
  callback: CallableFunction
) {
  db.all(
    `SELECT ${columnToSelect}, COUNT(*) FROM ${tableName} GROUP BY ${columnToSelect};`,
    callback
  );
}

export function alterTable(db: Database, tableName: string) {
  db.run(`ALTER TABLE ${tableName} DROP Director`);
}
