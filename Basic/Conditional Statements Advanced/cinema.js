function cinema(input) {
    let typeProject = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let premierePrice = 12;
    let normalPrice = 7.50;
    let discountPrice = 5;
    let income = 0 ;

    if (typeProject === "Premiere") {
        income = rows * columns * premierePrice;
    } else if (typeProject === "Normal") {
        income = rows * columns * normalPrice;
    } else if (typeProject === "Discount") {
        income = rows * columns * discountPrice;
    } 
    console.log(`${income.toFixed(2)} leva`);
} 
cinema(["Discount", "12", "30"])

// В една кинозала столовете са наредени в правоъгълна форма в r реда и c колони. 
//Има три вида прожекции с билети на различни цени:
//•	Premiere – премиерна прожекция, на цена 12.00 лева.
//•	Normal – стандартна прожекция, на цена 7.50 лева.
//•	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
//Напишете функция, която приема тип прожекция (стринг), брой редове 
//и брой колони в залата (цели числа) и изчислява общите приходи от билети при пълна зала. 
//Резултатът да се отпечата във формат като в примерите по-долу, с 2 знака след десетичната точка.  
