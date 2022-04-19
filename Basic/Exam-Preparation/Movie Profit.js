function movieProfit(input) {

    let movieName = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percForCinema = Number(input[4]);

    let sumForDay = tickets * ticketPrice;
    let totalProfit = sumForDay * days;
    let percForCinemabynumber = percForCinema / 100;
    let profitForCinema = percForCinemabynumber * totalProfit;
    let profitFormovie = totalProfit - profitForCinema;

    console.log(`The profit from the movie ${movieName} is ${profitFormovie.toFixed(2)} lv.`)


}
movieProfit(["The Programmer",
    "20",
    "500",
    "7.50",
    "7"])

