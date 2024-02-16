class Model {
  createSpecification() {
    let query = "";
    let columns = "";
    let questionMarks = "";

    // for (const value of Object.values(this)) {
    //   columns = `${columns} ${value},`;
    //   questionMarks = `${questionMarks} ?,`;
    // }

    Object.values(this).forEach(
      (value) => (
        (columns = `${columns} ${value},`),
        (questionMarks = `${questionMarks} ?,`)
      )
    );

    columns = columns.trim().slice(0, -1);
    questionMarks = questionMarks.trim().slice(0, -1);
    query = `(${columns}) VALUES (${questionMarks})`;

    return query;
  }
}

export class Movies_Insert extends Model {
  title: string = "Title";
  director: string = "Director";
  year: string = "Year";
}

export class Boxoffice_Insert extends Model {
  movieID: string = "MovieID";
  rating: string = "Rating";
  domesticSales: string = "Domestic_sales";
  internationalSales: string = "International_sales";
}

// const movies = new Movies_Insert();
// movies.createSpecification();
// console.log(movies);
