function EvenAndOddSubtraction(array){

    let sumOfOdd=0;
    let sumOfEven = 0;
    let diff = 0;

    for (let index = 0; index < array.length; index++) {
        let num = Number(array[index]);
        if(num % 2 === 0){
            sumOfEven+=num;
        }else{
            sumOfOdd+=num;
        }
        
    }
    diff = sumOfEven - sumOfOdd;
    console.log(diff);

}
EvenAndOddSubtraction([1,2,3,4,5,6])