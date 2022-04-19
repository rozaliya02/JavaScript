function ANDProcessors(input){

    let processorsCount = Number(input[0]);
    let peopleCount = Number(input[1]);
    let workingDays = Number(input[2]);

    let totalworkingHours = peopleCount * workingDays * 8;
    let totalprocessorCount = Math.floor(totalworkingHours / 3);

    let lossesCount = Math.abs(processorsCount - totalprocessorCount);

    if(totalprocessorCount < processorsCount){
        let lossesMoney = lossesCount * 110.10;
        console.log(`Losses: -> ${lossesMoney.toFixed(2)} BGN`)
    }else{
        let winMoney = lossesCount * 110.10;
        console.log(`Profit: -> ${winMoney.toFixed(2)} BGN`)
    }



}
ANDProcessors(["150", "7", "18"])