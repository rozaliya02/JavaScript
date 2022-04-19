function familyTrip(input){

    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let nightPrice = Number(input[2]);
    let percForfun = Number(input[3]);
    let percForfuninNumber = percForfun / 100;

    if(nights > 7){

        nightPrice = nightPrice - (5/100 * nightPrice);
    }

    let totalNightPrice = nights * nightPrice;
    let moneyforFun = budget * percForfuninNumber;
    let vacationPrice = totalNightPrice + moneyforFun;
    let diff = Math.abs(budget - vacationPrice);
    if(vacationPrice <= budget){
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`)
    }else{
        console.log(`${diff.toFixed(2)} leva needed.`)
    }
    

}
familyTrip(["800.50", 
"8",
"100",
"2"])