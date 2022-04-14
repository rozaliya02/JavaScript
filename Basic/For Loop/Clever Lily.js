function cleverLily(input) {
    let age = Number(input[0]);
    let washingMashinePrice = Number(input[1]);
    let ToyPrice = Number(input[2]);

    let ToyCounter = 0;
    let saveMoney = 0;
    let money = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            ToyCounter++;
        } else {
            saveMoney += money;
            money += 10;
            saveMoney -= 1;
        }
    }
    
    saveMoney += ToyCounter * ToyPrice;
    let diff = Math.abs(saveMoney - washingMashinePrice);
    if (saveMoney >= washingMashinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`)
    } else {
        console.log(`No! ${diff.toFixed(2)}`)
    }
}

cleverLily(["21",
"1570.98",
"3"])
