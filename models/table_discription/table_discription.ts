class Model {
  createSpecification() {
    let query = "";

    // for (const [key, value] of Object.entries(this)) {
    //   query = `${query} ${key} ${value},`;
    // }

    Object.keys(this)
      .filter((key) => key !== "tableName")
      .forEach(
        (key) => (query = `${query} ${key} ${this[key as keyof this]},`)
      );

    query = query.trim().slice(0, -1);
    return `(${query})`;
  }
}

export class Movies extends Model {
  tableName: string = "Movies";
  ID: string = "INTEGER PRIMARY KEY AUTOINCREMENT";
  Title: string = "TEXT";
  Director: string = "TEXT";
  Year: string = "INTEGER";
}

export class Boxoffice extends Model {
  tableName: string = "Boxoffice";
  MovieID: string = "INTEGER PRIMARY KEY";
  Rating: string = "INTEGER";
  Domestic_sales: string = "INTEGER";
  International_sales: string = "INTEGER";
}

// const movies = new Movies();
// movies.createSpecification();
// console.log(movies);

// const key = "title";
// const obj = {
//   id: 1,
//   title: "retro",
// };
// obj.title
// obj[key]