function SoftUniReception(input) {

    let firstEmplyer = Number(input[0]);
    let secondEmplyer = Number(input[1]);
    let ThirtEmplayer = Number(input[2]);
    let allOfStudent = Number(input[3]);


    let studentsCountforHour = firstEmplyer + secondEmplyer + ThirtEmplayer;
    let studentCount = studentsCountforHour;
    let hour = 1;

    while(studentCount < allOfStudent) {

        studentCount += studentsCountforHour;
        hour++;
        if (hour % 4 === 0) {
    
            studentCount -= studentsCountforHour
        }
        
    }
    console.log(`Time needed: ${hour}h.`)

}
SoftUniReception(['3','2','5','40'])
