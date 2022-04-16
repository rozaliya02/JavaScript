function Graduation(input){
    
    let index = 0;
    let studentName = input[index];
    index++;

    let averageGrade = 0;
    
    let grade = Number(input[index]);
    let counter = 0;

    while(grade >= 4){

        counter++;
        averageGrade += grade;
        index++;
        grade = Number(input[index]);
        

    }

    averageGrade = averageGrade / counter;
    if(counter === 12){
        console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    } else{
        console.log(`${studentName} has been excluded at ${counter + 1} grade`)
    }
    
}
Graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])


// Напишете програма, която изчислява средната оценка на ученик от цялото му обучение. На първия ред ще получите 
//името на ученика, а на всеки следващ ред неговите годишни оценки. Ученикът преминава в следващия клас, 
//ако годишната му оценка е по-голяма или равна на 4.00. Ако ученикът бъде скъсан повече от един път, 
//то той бива изключен и програмата приключва, като се отпечатва името на ученика и в кой клас бива изключен.
 //При успешно завършване на 12-ти клас да се отпечата : 
 //"{име на ученика} graduated. Average grade: {средната оценка от цялото обучение}"
 //В случай, че ученикът е изключен от училище, да се отпечата:
 //"{име на ученика} has been excluded at {класа, в който е бил изключен} grade"
 //Стойността трябва да бъде форматирана до втория знак след десетичната запетая. 
 