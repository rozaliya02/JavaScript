function SumFirstAndLastArrayElements(array){
    let first = 0;
    let last = 0;
    let sum = 0;

    for (let index = 0; index < array.length; index++) {
        first = array[0];
        last = array[array.length - 1];
        sum = last + first;
    }

    console.log(sum);
}

SumFirstAndLastArrayElements([20, 30, 40])