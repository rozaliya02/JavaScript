function tennisRanklist(input) {
    let index = 0;
    let championships = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
    let score = 0;
    let winCounter = 0;

    for (let i = 0; i < championships; i++) {
        let etap = input[index];
        index++
        if (etap === "W") {
            score += 2000;
            winCounter++;
        } else if (etap === "F") {
            score += 1200;
        } else {
            score += 720;
        }
     }
     let totalScore = startPoints + score;
     let averageScore = Math.floor(score / championships);
     console.log(`Final points: ${totalScore}`);
     console.log(`Average points: ${averageScore}`);
     let totalWin = winCounter / championships * 100;
     console.log(`${totalWin.toFixed(2)}%`);





} tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])


