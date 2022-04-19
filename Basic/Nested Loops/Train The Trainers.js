function trainTheTrainers(input){

    let index = 0;
    let people = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let score = 0;
    let counter = 0;


    while (command !== "Finish") {
        let name = command;
        let temSum = 0;
        for (let i = 0; i < people; i++) {
            counter++;
            let grade = Number(input[index]);
            index++
            temSum += grade;
            score+=grade;
        }
        let averageGrade = temSum / people;
        console.log(`${name} - ${averageGrade.toFixed(2)}.`)

    
        command = input[index];
        index++;
    }
    let avgGrade = score / counter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`)
}
trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"])
