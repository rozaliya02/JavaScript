function oscars(input) {
    let index = 0
    let actorName = input[index];
    index++;
    let startPoints = Number(input[index]);
    index++;
    let countmark = Number(input[index]);
    index++;
    let total = 0;
    let breakpoint = 1250.5;
    let isEnought = false;

    for (let i = 0; i < countmark; i++) {
        let judgeName = input[index];
        index++;
        let judgeScore = Number(input[index]);
        index ++;
        total = startPoints + ((judgeName.length * judgeScore) / 2)
        startPoints = total;
        if (total >= breakpoint) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${total.toFixed(1)}!`)
            isEnought = true;
            break;
    }
}



     if(!isEnought) {
        console.log(`Sorry, ${actorName} you need ${(breakpoint - startPoints).toFixed(1)} more!`)
    }
}


oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

