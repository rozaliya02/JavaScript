function Rounding(num, precision) {

    let num1 = Number(num);
    let precision1 = Number(precision);
    if (precision1 > 15) {
        precision1 = 15;
    }
    num1 = num1.toFixed(precision1);
    console.log(parseFloat(num1));

}
Rounding(10.5, 3)