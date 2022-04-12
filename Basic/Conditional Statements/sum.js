function sumSeconds(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    let sumInsec = a + b + c;
    let timeInmath = Math.floor(sumInsec / 60);
    let timeinsec = (sumInsec % 60);

    if (timeinsec < 10) {
        console.log(`${timeInmath}:0${timeinsec}`);
    } else {
        console.log(`${timeInmath}:${timeinsec}`);
    }
}

sumSeconds(["35", "45", "44"])