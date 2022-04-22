function SumDigits(num){

    let numAsSting = String(num);

    let sum = 0;

    for(let i = 0; i<numAsSting.length; i++){
        sum+=Number(numAsSting[i]);
    }

    console.log(sum);

}
SumDigits(245678)