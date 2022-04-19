function touristShop(input) {

    let index = 0;
    let budget = Number(input[index]);
    index++;
    let command = input[index];
    let counter = 0;
    let totalSum = 0;

    while (command !== "Stop") {
        let productName = command;
        index++;
        let productPrice = Number(input[index]);
        counter++;

        if (counter % 3 === 0) {
            productPrice = productPrice / 2;
        }
        budget = budget - productPrice;
        totalSum += productPrice;
        if (0 > budget) {
            console.log("You don't have enough money!");
            console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`)
            break;
        }

        index++;
        command = input[index];

    }

    if (command === "Stop") {
        console.log(`You bought ${counter} products for ${totalSum.toFixed(2)} leva.`)
    }


}
touristShop(["153.20",
    "Backpack",
    "25.20",
    "Shoes",
    "54",
    "Sunglasses",
    "30",
    "Stop"])