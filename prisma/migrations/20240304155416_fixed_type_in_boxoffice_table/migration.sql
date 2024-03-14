/*
  Warnings:

  - You are about to alter the column `Rating` on the `Boxoffice` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Boxoffice" (
    "Movie_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Rating" REAL NOT NULL,
    "Domestic_sales" INTEGER NOT NULL,
    "International_sales" INTEGER NOT NULL
);
INSERT INTO "new_Boxoffice" ("Domestic_sales", "International_sales", "Movie_id", "Rating") SELECT "Domestic_sales", "International_sales", "Movie_id", "Rating" FROM "Boxoffice";
DROP TABLE "Boxoffice";
ALTER TABLE "new_Boxoffice" RENAME TO "Boxoffice";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
