function SoftUniReception(firstEmployer, secondEmployer, ThirdEmployer, allOfStudent){


    let studentsCounterHour = firstEmployer + secondEmployer + ThirdEmployer;
    let studentCount = 0;
    let hour = 0;

    while(studentCount < allOfStudent){

            hour++;
            studentCount+=studentsCounterHour;

        
        
    }

    console.log(`Time needed: ${hour}h.`)

}
SoftUniReception['5','6','4','20']
