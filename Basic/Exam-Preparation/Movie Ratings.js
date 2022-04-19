function movieRatings(input){
    let index = 0;
    let countmark = Number(input[index]);
    index++;
    let totalRating = 0;
    let highestRating = Number.MIN_SAFE_INTEGER;
    let lowestRating = Number.MAX_SAFE_INTEGER;
    let highestMovieRating = "";
    let lowestMovieRating = "";

    for(let i = 0; i < countmark; i++){
        let movieName = input[index];
        index++;
        let movieRatings = Number(input[index]);
        index++;
        totalRating+=movieRatings;
        if(movieRatings > highestRating){
            highestRating = movieRatings;
            highestMovieRating = movieName;
        }
        if(movieRatings < lowestRating){
            lowestRating = movieRatings;
            lowestMovieRating = movieName; 
        }

    }

    let averageRating = totalRating / countmark;
    console.log(`${highestMovieRating} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestMovieRating} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);

}
movieRatings(["5",
    "A Star is Born" ,
    "7.8",
    "Creed 2" ,
    "7.3" ,
    "Mary Poppins",
    "7.2",
    "Vice" ,
    "7.2" ,
    "Captain Marvel" ,
    "7.1" ,])