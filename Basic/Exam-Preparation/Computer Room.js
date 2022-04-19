function computerRoom(input) {
    let mounth = input[0];
    let hoursInRoom = Number(input[1]);
    let peopleInGroup = Number(input[2]);
    let time = input[3];
    let price = 0;

    switch (mounth) {
        case "march":
            if (time === 'day') {
                price = 10.50;
            } else {
                price = 8.40;
            }
            break;

        case "april":
            if (time === 'day') {
                price = 10.50;
            } else {
                price = 8.40;
            }

            break;

        case "may":
            if (time === 'day') {
                price = 10.50;
            } else {
                price = 8.40;
            }
            break;

        case "june":
            if (time === 'day') {
                price = 12.60;
            } else {
                price = 10.20;
            }
            break;

        case "july":
            if (time === 'day') {
                price = 12.60;
            } else {
                price = 10.20;
            }
            break;

        case "august":
            if (time === 'day') {
                price = 12.60;
            } else {
                price = 10.20;
            }
            break;
    }

    if(peopleInGroup >= 4 ){
        price = price * 0.90;
    }

    if(hoursInRoom >= 5) {
        price = price / 2;
    }

    let totalPrice = (price*peopleInGroup)*hoursInRoom

    console.log(`Price per person for one hour: ${price.toFixed(2)}`)
    console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`)


}

computerRoom(["july", "5", "5", "night"])