import { Database } from "sqlite3";

export function createTable(db: Database, tableName: string) {
  db.run(
    `CREATE TABLE IF NOT EXISTS ${tableName} (id INTEGER PRIMARY KEY AUTOINCREMENT, Title TEXT, Director TEXT, Year INTEGER)`
  );
}

export function dropTable(db: Database, tableName: string) {
  db.run(`DROP TABLE IF EXISTS ${tableName}`);
}

export function insertData(
  db: Database,
  tableName: string,
  testData: { title: string; director: string; year: number }[]
) {
  testData.map((obj) =>
    db.run(
      `INSERT INTO ${tableName} (Title, Director, Year) VALUES (?, ?, ?)`,
      [obj.title, obj.director, obj.year]
    )
  );
}

export function selectData(
  db: Database,
  tableName: string,
  callback: CallableFunction
) {
  db.all(`SELECT director FROM ${tableName}`, callback);
}

export function orderData(
  db: Database,
  tableName: string,
  callback: CallableFunction
) {
  db.all(`SELECT * FROM ${tableName} ORDER BY Year DESC`, callback);
}

export function alterTable(db: Database, tableName: string) {
  db.run(`ALTER TABLE ${tableName} DROP Director`);
}
