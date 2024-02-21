-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Title" TEXT NOT NULL,
    "Director" TEXT NOT NULL,
    "Year" INTEGER NOT NULL,
    "Length_minutes" INTEGER
);
INSERT INTO "new_Movies" ("Director", "Length_minutes", "Title", "Year", "id") SELECT "Director", "Length_minutes", "Title", "Year", "id" FROM "Movies";
DROP TABLE "Movies";
ALTER TABLE "new_Movies" RENAME TO "Movies";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
