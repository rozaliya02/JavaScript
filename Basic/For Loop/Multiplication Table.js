function multiplicationTable(input){

    let num = Number(input[0]);
    for(let a = 1; a<=10; a++){
        console.log(`${a} * ${num} = ${a * num}`);
    }
} multiplicationTable(["5"])