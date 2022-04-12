function basketball(input){
    let trainers = Number(input[0]);
    let sneakers = trainers - (trainers * 0.40);
    let suit = sneakers - (sneakers * 0.20);
    let ball = suit / 4;
    let acsesories = ball / 5;
    let total = trainers + sneakers + suit + ball + acsesories;
    console.log(total);
}
basketball([365])