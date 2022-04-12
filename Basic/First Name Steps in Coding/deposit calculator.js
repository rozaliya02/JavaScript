function calculator(input) {
    let deposit = Number(input[0]);
    let time = Number(input[1]);
    let years = Number(input[2]);
    let yearsByperc = years / 100;
    let lihva = deposit * yearsByperc;
    let lihva1 = lihva / 12;
    let result = deposit + time * lihva1;
    console.log(result);
}
calculator["2350",
"6",
"7"]
