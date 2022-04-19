function vetParking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let totalSum = 0;
    let sumPerDay = 0;

    for (let currentDay = 1; currentDay <= days; currentDay++) {
        for (let currentHour = 1; currentHour <= hours; currentHour++) {
            if (currentDay % 2 === 0 && currentHour % 2 !== 0) {
                totalSum += 2.50;
                sumPerDay += 2.50;
            } else if (currentDay % 2 !== 0 && currentHour % 2 === 0) {
                totalSum += 1.25;
                sumPerDay += 1.25;
            } else {
                totalSum++;
                sumPerDay++;
            }

        }
        console.log(`Day: ${currentDay} - ${sumPerDay.toFixed(2)} leva`);
        sumPerDay = 0;
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`)


}
vetParking(["5", "2"])