function loop(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0;
    let output = "";
    for (let a = start; a <= end; a++) {
        if (a % 9 === 0) {
            sum += a;
            output += `${a} \n`;

        }
    } console.log(`The sum: ${sum}`);
    console.log(output)

} loop(["100", "200"])