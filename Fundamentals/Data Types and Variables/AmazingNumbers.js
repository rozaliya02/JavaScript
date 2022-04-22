function AmazingNumbers(num){

    let numToString = String(num);
    let sum = 0;
    let result = "False"

    for(let i = 0; i < numToString.length; i++){
        sum += Number(numToString[i]);
    }

    let sumAsString = String(sum);

    for(let i = 0; i < sumAsString.length; i++){
        if(sumAsString[i] == "9"){
            result = "True"
        }
    } 

    console.log(`${num} Amazing? ${result}`)

    
}
AmazingNumbers(999)