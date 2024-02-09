import sqlite3, { Database } from "sqlite3";

let db: Database | null = null;

function createDatabase(path: string) {
  db = new sqlite3.Database(
    path,
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
      // do your thing
    }
  );
  return db;
}

export function getDatabase(path: string) {
  if (db) {
    return db;
  }

  return createDatabase(path);
}
