function puppyCare(input){
let boughtFood = Number(input[0]);
let boughtFoodInGrammas = boughtFood * 1000;
let index = 1;
let command = input[index];
index++;
let needFood = 0;

while(command !== "Adopted"){
    let everytimeFood = Number(command);
    needFood+=everytimeFood;

    command = input[index];
    index++
}

let diff = Math.abs(boughtFoodInGrammas - needFood);
if(needFood <= boughtFoodInGrammas){
    console.log(`Food is enough! Leftovers: ${diff} grams.`)
}else{
    console.log(`Food is not enough. You need ${diff} grams more.`)
}

}
puppyCare(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])


