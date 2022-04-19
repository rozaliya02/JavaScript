function sumofTwoNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinationCounter = 0;
    let isFound = false;


    for (let i = num1; i <= num2; i++) {
        for (let j = num1; j <= num2; j++) {
            combinationCounter++;

            let result = i + j;

            

            if (result === magicNumber) {
                console.log(`Combination N:${combinationCounter} (${i} + ${j} = ${magicNumber})`)
                isFound = true;
                return;
            }
        }

            
        

    }

    if (isFound === false) {
        console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`)

    }

}
sumofTwoNumbers(["23",
"24",
"20"])


