function lunchBreak(input) {
    let movieName = input[0];
    let lenghtMovie = Number(input[1]);
    let lenghtBreak = Number(input[2]);
    let lunchTime = lenghtBreak * 0.125 ;
    let spareTime = lenghtBreak * 0.25;
    let timeLeft = lenghtBreak - lunchTime - spareTime;
   
 
    if (lenghtMovie <= timeLeft) {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeLeft - lenghtMovie)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(lenghtMovie - timeLeft)} more minutes.`);
    }
} lunchBreak(["Game of Thrones",
"60",
"96"])
