function Sequence2k1(input){

    let counter = 1;
    let n = Number(input[0]);

    while(counter <= n){
        console.log(counter);
        counter = counter * 2 +1;
    }
}
Sequence2k1([8])