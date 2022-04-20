function Vacation(group, type, day) {
    let ticketPrice = 0;
    switch (type) {
        case "Students":
            if (day == "Friday") {
                ticketPrice += 8.45;
            } else if (day == "Saturday") {
                ticketPrice += 9.80;
            } else if (day == "Sunday") {
                ticketPrice += 10.46;
            } break;
        case "Business":
            if (day == "Friday") {
                ticketPrice += 10.90;
            } else if (day == "Saturday") {
                ticketPrice += 15.60;
            } else if (day == "Sunday") {
                ticketPrice += 16;
            } break;
        case "Regular":
            if (day == "Friday") {
                ticketPrice += 15;
            } else if (day == "Saturday") {
                ticketPrice += 20;
            } else if (day == "Sunday") {
                ticketPrice += 22.50;
            } break;

    }

    let TotalPrice = group * ticketPrice;
    let discount = 0;
    switch (type) {
        case "Students":
            if (group >= 30) {
                discount = 15 / 100 * TotalPrice;
                TotalPrice = TotalPrice - discount;
            } break;
        case "Business":
            if (group >= 100) {
                discount = 10 * ticketPrice;
                TotalPrice = TotalPrice - discount;
            } break;
        case "Regular":
            if (group >= 10 && group <= 20) {
                discount = 5 / 100 * TotalPrice;
                TotalPrice = TotalPrice - discount;
            } break;
    }
    console.log(`Total price: ${TotalPrice.toFixed(2)}`);


}
Vacation(30,
    "Students",
    "Sunday"
    
)