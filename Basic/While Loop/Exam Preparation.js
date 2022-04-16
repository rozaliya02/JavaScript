function examPreparation(input) {
    let invalidScore = Number(input[0]);
    let index = 1;
    let exerciseName = input[index];
    let problemCounter = 0;
    let sum = 0;
    let counterProblems = 0;
    let lastProblem = 0;
    while (exerciseName !== "Enough") {
        lastProblem = exerciseName;
        index++;
        let grade = Number(input[index]);
        sum+=grade;
        counterProblems++;

        if (grade <= 4) {
            problemCounter++;
        } 
            
        if(problemCounter === invalidScore){
            break;
        }
        index++;
        exerciseName = input[index];
    }
    let averageScore = sum / counterProblems; 
    if(exerciseName === "Enough"){
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${counterProblems}`);
        console.log(`Last problem: ${lastProblem}`)
    } else if (problemCounter === invalidScore){
        console.log(`You need a break, ${problemCounter} poor grades.`);
    }
}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

