import { Database } from "sqlite3";

interface DatabaseProps {
  db: Database;
  tableName: string;
}

interface TestData extends DatabaseProps {
  testData: (string | number)[][];
}

interface SelectAllProps extends DatabaseProps{
  callback: CallableFunction;
}

export function createTable({ db, tableName }: DatabaseProps) {
  db.run(
    `CREATE TABLE IF NOT EXISTS ${tableName} (id INTEGER, Title TEXT, Director TEXT, Year INTEGER)`
  );
}

export function dropTable({ db, tableName }: DatabaseProps) {
  db.run(`DROP TABLE IF EXISTS ${tableName}`);
}

export function insertData({ db, tableName, testData }: TestData) {
  testData.map((array) =>
    db.run(
      `INSERT INTO ${tableName} (id, Title, Director, Year) VALUES (?, ?, ?, ?)`,
      [array[0], array[1], array[2], array[3]]
    )
  );
}

export function selectData({ db, tableName, callback }: SelectAllProps) {
  db.all(`SELECT director FROM ${tableName}`, callback);
}

export function orderData({ db, tableName }: DatabaseProps) {
  db.run(`SELECT * FROM ${tableName} ORDER BY Year ASC`);
}

export function alterTable({ db, tableName }: DatabaseProps) {
  db.run(`ALTER TABLE ${tableName} DROP Director`);
}
