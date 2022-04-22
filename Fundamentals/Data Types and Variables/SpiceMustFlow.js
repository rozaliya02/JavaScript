function SpiceMustFlow(start) {

    let dayCounter = 0;
    let spiceExtracted = 0;

    while (start >= 100) {
        dayCounter++;
        spiceExtracted += start - 26;
        start -= 10;
    }

    console.log(dayCounter);

    if (dayCounter != 0) {
        console.log(spiceExtracted - 26);
    } else {
        console.log(spiceExtracted)

    }
}
SpiceMustFlow(111)