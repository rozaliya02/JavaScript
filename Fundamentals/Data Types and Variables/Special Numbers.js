function SpecialNumbers(n) {

    for(let num = 1; num <=n; num++){
    let numToString = String(num);
    let sum = 0;
    let result = "False"

    for (let i = 0; i < numToString.length; i++) {
        sum += Number(numToString[i]);
    }

    
        if (sum == 5 || sum == 7 || sum == 11) {
            result = "True"
        }
    

    console.log(`${num} -> ${result}`)


}
}


SpecialNumbers(15)