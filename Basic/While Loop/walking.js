    function walking(input){
    let target = 10000;
    let index = 0;
    let command = input[index];
    index++;
    let stepsSum = 0;
    
    while(command !== "Going home"){
        let steps = Number(command);
        

        stepsSum+=steps;

        if(stepsSum >= target){
           break;
        }
        
        command = input[index];
        index++
       
   }

   if(command === "Going home"){

   let steps = Number(input[index]);
   index++;
   stepsSum += steps;
   }

   let diff = Math.abs(stepsSum - target)

   if(stepsSum >= target){
       console.log("Goal reached! Good job!")
       console.log(`${diff} steps over the goal!`)
   } else {
       console.log(`${diff} more steps to reach goal.`)
   }

    }
walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])	
