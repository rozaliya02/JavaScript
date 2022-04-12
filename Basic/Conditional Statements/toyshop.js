function toyshop(input) {

    let tripPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let teddyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let puzzlesPrice = 2.60;
    let dollsPrice = 3;
    let teddyBearsPrice = 4.10;
    let minionsPrice = 8.20;
    let truckPrice = 2;

    let totalOrderCount = puzzlesCount + dollsCount + teddyBearsCount + minionsCount + truckCount;
    let totalOrderPrice = puzzlesCount * puzzlesPrice + dollsCount * dollsPrice + teddyBearsCount * teddyBearsPrice + minionsCount * minionsPrice + truckCount * truckPrice;

    if (totalOrderCount >= 50){
        totalOrderPrice = totalOrderPrice - totalOrderPrice * 0.25;
    }
    
    totalOrderPrice = totalOrderPrice - totalOrderPrice * 0.10;

    let diff = Math.abs(totalOrderPrice - tripPrice);

    if(totalOrderPrice >= tripPrice){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }


}
toyshop(["40.8",
"20",
"25",
"30",
"50",
"10"])

