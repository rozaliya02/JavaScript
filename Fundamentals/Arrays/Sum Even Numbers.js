function SumEvenNumbers(array){

    let sumOfNumbers = 0;

    for (let index = 0; index < array.length; index++) {
        let num = Number(array[index]);
        if(num % 2 === 0){
            sumOfNumbers+=num;
        }
        
    }
    console.log(sumOfNumbers);
}
SumEvenNumbers(['1','2','3','4','5','6'])