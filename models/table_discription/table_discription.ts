class Model {
  createSpecification() {
    let query = "";

    for (const [key, value] of Object.entries(this)) {
      query = `${query} ${key} ${value},`;
    }

    query = query.trim().slice(0, -1);
    return `(${query})`;
  }
}

export class Movies extends Model {
  ID: string = "INTEGER PRIMARY KEY AUTOINCREMENT";
  Title: string = "TEXT";
  Director: string = "TEXT";
  Year: string = "INTEGER";
}

export class Boxoffice extends Model {
  MovieID: string = "INTEGER PRIMARY KEY";
  Rating: string = "INTEGER";
  Domestic_sales: string = "INTEGER";
  International_sales: string = "INTEGER";
}

// const movies = new Boxoffice();
// movies.createSpecification();
// console.log(movies);
