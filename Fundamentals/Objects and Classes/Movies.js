function movies(array) {
  let listOfMovies = [];

  for (let lines of array) {
    if (lines.includes("addMovie")) {
      let info = lines.split("addMovie ");
      let nameOfMovie = info[1];
      listOfMovies.push({ name: nameOfMovie });
    } else if (lines.includes("directedBy")) {
      let info = lines.split(" directedBy ");
      let nameOfMovie = info[0].trim();
      let director = info[1];

      let movie = listOfMovies.find(movieObj => movieObj.name === nameOfMovie);

      if (movie) {
        movie.director = director;
      }
    } else if (lines.includes("onDate")) {
      let info = lines.split(" onDate ");
      let nameOfMovie = info[0].trim();
      let date = info[1];

      let movie = listOfMovies.find(movieObj => movieObj.name === nameOfMovie);

      if (movie) {
        movie.date = date;
      }
    }
  }

  for (let movie of listOfMovies) {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  }
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);

// •	"addMovie {movie name}" – add the movie
// •	"{movie name} directedBy {director}" – check if the movie exists and then add the director
// •	"{movie name} onDate {date}" – check if the movie exists and then add the date
