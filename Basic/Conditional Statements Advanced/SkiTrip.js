function SkiTrip(input) {

    let days = Number(input[0]);
    let nights = days - 1;
    let typeofRoom = input[1];
    let great = input[2];
    let roomForOnePersonPrice = 18;
    let apartmantPrice = 25;
    let presidentApartmentPrice = 35;
    let diffAparment = 0;
    let diffAparmentPresident = 0;
    let totalPrice = 0;
   
    switch (typeofRoom) {
        case "room for one person":
            totalPrice = roomForOnePersonPrice * nights;
            break;
        case "apartment":
            if (days < 10) {
                diffAparment = 0.30;
            } else if (days >= 10 && days <= 15) {
                diffAparment = 0.35;
            } else if (days > 15) {
                diffAparment = 0.50;
            }
            totalPrice = nights * apartmantPrice;
            totalPrice = totalPrice - totalPrice *diffAparment;
            break;
        case "president apartment":

            if (days < 10) {
                diffAparmentPresident = 0.10;
            } else if (days >= 10 && days <= 15) {
                diffAparmentPresident = 0.15;
            } else if (days > 15) {
                diffAparmentPresident = 0.20;
            }

            totalPrice = nights * presidentApartmentPrice;
            totalPrice = totalPrice - totalPrice *diffAparmentPresident;

            break;
    }

    if(great === "positive"){

        totalPrice = totalPrice + totalPrice * 0.25;

    } else {
        totalPrice = totalPrice - totalPrice * 0.10;
    }

    console.log(totalPrice.toFixed(2));
}
SkiTrip(["30",
"president apartment",
"negative"])

