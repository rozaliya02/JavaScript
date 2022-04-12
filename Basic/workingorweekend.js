function solve(input) {
    let day = input[0];
    switch (day) {
        case "Monday":
        case "Thursday":
        case "Wednesday":
        case "Tuesday":
        case "Friday":
            console.log("Working day"); break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend"); break;
        default:
            console.log("Error"); break;
    }
}
solve(["Sunday"]);