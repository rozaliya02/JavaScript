function gymnastics(input) {

    let countryName = input[0];
    let equipment = input[1];
    let result = 0;

    switch (countryName) {
        case "Bulgaria":
            if (equipment === "ribbon") {
                result = 9.600 + 9.400;
            }
            if (equipment === "hoop") {
                result = 9.550 + 9.750;
            }
            if (equipment === "rope") {
                result = 9.500 + 9.400;
            } break;
        case "Russia":
            if (equipment === "ribbon") {
                result = 9.100 + 9.400;
            }
            if (equipment === "hoop") {
                result = 9.300 + 9.800;
            }
            if (equipment === "rope") {
                result = 9.600 + 9.000;
            } break;
        case "Italy":
            if (equipment === "ribbon") {
                result = 9.200 + 9.500;
            }
            if (equipment === "hoop") {
                result = 9.450 + 9.350;
            }
            if (equipment === "rope") {
                result = 9.700 + 9.150;
            } break;
        }
        
        let maxCounter = 20 - result;
        let maxCounterinPerc = (maxCounter/20)*100;

        console.log(`The team of ${countryName} get ${result.toFixed(3)} on ${equipment}.`);
        console.log(`${maxCounterinPerc.toFixed(2)}%`);
}
gymnastics(["Italy",
    "hoop"])