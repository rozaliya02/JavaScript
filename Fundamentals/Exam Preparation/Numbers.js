function Numbers(input){

    let houseCount = input.shift().split("@").map(Number);
    let cupid = 0;

    
    while(input[0] != "Love!"){
        let tokens = input.shift().split(" ");
        let jump = Number(tokens[1]);

        cupid+=jump;

        if(cupid >= houseCount.length){
            cupid = 0;
        }
        if(houseCount[cupid] === 0){
            console.log(`Place ${cupid} has Valentine's day.`);
        } else{
            houseCount[cupid] -= 2;
        }

        if(houseCount[cupid] == 0){
            console.log(`Place ${cupid} has Valentine's day.`)
        }

    }

    let missed = 0;
    for (let house of houseCount) {
        if(house > 0){
            missed++;
        }
    }
    console.log(`Cupid's last position was ${cupid}.`)

    if(missed > 0){
        console.log(`Cupid has failed ${missed} places.`)
    } else{
        console.log("Mission was successful.")
    }

}
Numbers(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"])
