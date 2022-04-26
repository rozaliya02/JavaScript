function ArrayRotation(array , num){

    let myArr = array;


    for (let index = 0; index < num; index++) {
        
        let currentNum = myArr.shift();
        myArr.push(currentNum);
        
    }

    console.log(myArr.join(" "));

}
ArrayRotation([51, 47, 32, 61, 21], 2)