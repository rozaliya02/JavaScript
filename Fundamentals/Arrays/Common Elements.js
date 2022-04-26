function CommonElements(arr1 , arr2){

    let firstArray = arr1;
    let secondArray = arr2;

    for (let index1 = 0; index1 < firstArray.length; index1++) {
        for (let index2 = 0; index2 < secondArray.length; index2++) {
            if(firstArray[index1] === secondArray[index2]){
                console.log(firstArray[index1]);
            }
        }
        
    }

}
CommonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)