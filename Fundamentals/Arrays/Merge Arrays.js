function MergeArrays(arr1, arr2){

    let firstArray = arr1;
    let secondArray = arr2;
    let sum = 0;
    let concatenation = 0;
    let myArr = [];

    for (let index1 = 0; index1 < firstArray.length; index1++) {

        if(index1 % 2 === 0){
           sum = Number(firstArray[index1]) + Number(secondArray[index1]);
           myArr.push(sum);
        }else{
            concatenation = firstArray[index1] + secondArray[index1];
            myArr.push(concatenation); 
        }
    }

    console.log(myArr.join(" - "));

}
MergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)