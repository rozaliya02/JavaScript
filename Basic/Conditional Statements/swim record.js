function worldSwimmingRecord(input) {
    let sec = Number(input[0]);
    let meters = Number(input[1]);
    let secForMeters = Number(input[2]);
    let ivansTime = meters * secForMeters;
    let delay = Math.floor(meters / 15);
    delay = delay * 12.5;
    let finalTime = ivansTime + delay;

    let diff = Math.abs(sec - finalTime)

    if (finalTime < sec) {
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`)
    } else if (finalTime >= sec) {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }

} worldSwimmingRecord(["10464",
    "1500",
    "20"])
