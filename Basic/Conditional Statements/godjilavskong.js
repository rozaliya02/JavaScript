function movie(input){
let budget = Number(input[0]);
let extras = Number(input[1]);
let clothingPrice = Number(input[2]);
let decor = budget * 0.10;
let totalClothes = 0;
if (extras > 150) {
    totalClothes = extras * (clothingPrice * 0.90)
} else {
    totalClothes = extras * clothingPrice;
}
let totalPrice = decor + totalClothes;
let diff = Math.abs(totalPrice - budget);
if (totalPrice > budget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
} else {
    console.log("Action!");
    console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
}

}
movie(["15437.62", "186", "57.99"]);