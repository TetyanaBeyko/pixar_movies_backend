import { Database } from "sqlite3";

// Create, Inset, Drop table //
export function createTable(db: Database, tableName: string, model: string) {
  db.run(`CREATE TABLE IF NOT EXISTS ${tableName} ${model}`);
}

export function insertTable(
  db: Database,
  tableName: string,
  model: string,
  data: Array<Object>
) {
  data.map((obj) => {
    db.run(`INSERT INTO ${tableName} ${model}`, Object.values(obj));
  });
}

export function dropTable(db: Database, tableName: string) {
  db.run(`DROP TABLE IF EXISTS ${tableName}`);
}

// Database Queries //
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

export function innerJoin(
  db: Database,
  tableName_1: Object,
  tableName_2: Object,
  columnToSelect: string
) {
  db.all(`SELECT ${columnToSelect}
    FROM ${tableName_1}
      JOIN ${tableName_2}
        ON ${tableName_1}.id = ${tableName_2}.MovieID
    WHERE international_sales > domestic_sales;`);
}
