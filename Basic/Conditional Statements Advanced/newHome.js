function newHome(input) {
    let type = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    let rosesPrice = 5;
    let DahliesPrice = 3.80;
    let TulipsPrice = 2.80;
    let NarcissusPrice = 3;
    let GladiolusPrice = 2.50
    switch (type) {
        case "Roses":
            price = flowersCount * rosesPrice;
            if (flowersCount > 80) {
                price = price - price * 0.10;
            } 
            break;
        case "Dahlias":
            price = flowersCount * DahliesPrice;
            if (flowersCount > 90) {
                price = price - price * 0.15;
            } break;
        case "Tulips":
            price = flowersCount * TulipsPrice;
            if (flowersCount > 80) {
                price = price - price * 0.15;
            }
             break;
        case "Narcissus":
            price = flowersCount * NarcissusPrice;
            if (flowersCount < 120) {
                price = price + price * 0.15;
            }
             break;
        case "Gladiolus":
            price = flowersCount * GladiolusPrice;
            if (flowersCount < 80) {
                price = price + price * 0.20;
            }
    } 
    let diff = Math.abs(price - budget)
    if (budget>=price){
        console.log(`Hey, you have a great garden with ${flowersCount} ${type} and ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }

    
} newHome(["Dahlias",
"112",
"460"])



