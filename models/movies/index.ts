class Model {
  createSpecification() {
    let query = "";

    for (const [key, value] of Object.entries(this)) {
      query = query + key + " " + value + " ";
    }

    query = query.trim();
    return `(${query})`;
  }
}

class Movies extends Model {
  // (id INTEGER PRIMARY KEY AUTOINCREMENT, Title TEXT, Director TEXT, Year INTEGER)
  id: string = "INTEGER PRIMARY KEY AUTOINCREMENT";
  title: string = "TEXT";
  director: string = "TEXT";
  year: string = "INTEGER";
}

export const movieObj = {
  id: "INTEGER PRIMARY KEY AUTOINCREMENT",
  title: "TEXT",
  director: "TEXT",
  year: "INTEGER",
};
