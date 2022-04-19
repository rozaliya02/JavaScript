function building(input) {
    let floor = Number(input[0]);
    let rooms = Number(input[1]);
    let s = "";


    for (let i = floor; i > 0; i--) {
        for (let j = 0; j < rooms; j++) {
            if (i === floor) {
                s += (`L${i}${j}`) + " ";
            } else if (i % 2 !== 0) {
                s += (`A${i}${j}`) + " ";
            } else if (i % 2 === 0) {
                s += (`O${i}${j}`) + " " ;
            }
        } console.log(s);
        s = ""
    }
}
building(["6", "4"])