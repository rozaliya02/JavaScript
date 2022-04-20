function PrintandSum(num1 , num2){
    let sum = 0;
    let squence = "";

    for(let i = num1; i <= num2; i++){

        sum+=i;
        squence+=i + " ";
    }

    console.log(squence);
    console.log(`Sum: ${sum}`);
}
PrintandSum(5, 10)