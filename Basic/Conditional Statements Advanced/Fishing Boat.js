function FishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishersCount = Number(input[2]);
    let price = 0;
    switch (season) {
        case "Spring":
            price = 3000;
            break;
        case "Summer":
        case "Autumn":
            price = 4200;
            break;
        case "Winter":
            price = 2600;
            break;
    } if (fishersCount <= 6) {
        price = price * 0.90;
    } else if (fishersCount >= 7 && fishersCount <= 11) {
        price = price * 0.85;
    } else if (fishersCount >= 12) {
        price = price * 0.75;
    }
    if (fishersCount % 2 == 0 && season !== "Autumn") {
        price = price * 0.95;
    }
    let diff = Math.abs(price - budget);
    if (budget >= price) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)

    }
} FishingBoat(["2000",
"Winter",
"13"])


