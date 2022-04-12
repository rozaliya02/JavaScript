function shopping(input) {
    let buget = Number(input[0]);
    let videoCards = Number(input[1]);
    let procesors = Number(input[2]);
    let ram = Number(input[3]);
    let vieoCardPrice = videoCards * 250;
    let procesorsPrice = procesors * (vieoCardPrice * 0.35);
    let ramPrice = ram * (vieoCardPrice * 0.10);
    let fullPrice = vieoCardPrice + procesorsPrice + ramPrice;

    if (videoCards > procesors) {
        fullPrice = fullPrice * 0.85;
    }

    if (fullPrice <= buget) {
        let diff = Math.abs(fullPrice - buget);
        console.log('You have ' + diff.toFixed(2) + ' leva left!')
    }
    else {
        let diff2 = Math.abs(fullPrice - buget);
        console.log('Not enough money! You need ' + diff2.toFixed(2) + ' leva more!')
    }

}
shopping(['920.45', '3', '1', '1'])