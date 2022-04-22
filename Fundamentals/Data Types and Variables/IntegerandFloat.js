function IntegerandFloat(a, b, c){

    let sum = a + b +c;
    let sumOfString = String(sum);

    let type = "Integer"

    for(let i = 0; i < sumOfString.length; i++){
        if(sumOfString[i] == "."){
            type = "Float"
        }
    }
    console.log(`${sum} - ${type}`);

}
IntegerandFloat(100, 200, 303)