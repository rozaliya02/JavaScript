function AddandSubtract(array){

    let sumofOriginal = 0;
    let sumofNew = 0;
    let myArr = array;

    for (let index = 0; index < myArr.length; index++) {
        sumofOriginal+=myArr[index];
        if(myArr[index] % 2 === 0){
            myArr[index] += index;
        } else{
            myArr[index] -= index;
        }
        
        sumofNew+=myArr[index]
    }

    console.log(myArr);
    console.log(sumofOriginal);
    console.log(sumofNew);
}
AddandSubtract([5, 15, 23, 56, 35]);