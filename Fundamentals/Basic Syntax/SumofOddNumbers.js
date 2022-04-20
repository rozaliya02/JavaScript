function SumofOddNumbers(m) {

let n = 5 
   let counter = 0;
   for(let i = 1; i<100; i++){
       if(i%2 != 0){
           console.log(i)
       }
       counter++;
       while(n =! counter){
           break;
       }
   }

}


SumofOddNumbers(5);