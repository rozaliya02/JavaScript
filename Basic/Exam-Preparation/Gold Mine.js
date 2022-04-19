function goldMine(input) {

    let index = 0
    let locationCount = Number(input[index]);
    index++;
    let totalSum = 0;
    let daysCounter = 0;
    let dayGold = 0;
    let days = 0;
    let averageSusp = 0;


    for (let i = 1; i <= locationCount; i++) {

        averageSusp = Number(input[index]);
        index++;
        days = Number(input[index]);
        index++;
      
        

        for (let j = 1; j <= days; j++) {
            daysCounter++
            dayGold = Number(input[index]);
            index++;
            totalSum += dayGold;

        }

        let averageTotalSum = totalSum / daysCounter;
        let diff = Math.abs(averageSusp - averageTotalSum);

    
        totalSum = 0;
        averageTotalSum = 0;
        daysCounter = 0;
    }
    if (dayGold >= averageSusp) {
        console.log(`Good job! Average gold per day: ${averageTotalSum.toFixed(2)}.`)
    } else {
        console.log(`You need ${diff.toFixed(2)} gold.`);
    }
}
goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"])


