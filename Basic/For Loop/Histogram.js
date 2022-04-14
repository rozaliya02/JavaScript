function histogram(input) {
    let n = Number(input[0]);
    let p1counter = 0;
    let p2counter = 0;
    let p3counter = 0;
    let p4counter = 0;
    let p5counter = 0;
    for (let i = 1; i <= n; i++) {
        let x = Number(input[i])
        if (x < 200) {
            p1counter++;
        } else if (x >= 200 && x < 400) {
            p2counter++;
        } else if (x >= 400 && x < 600) {
            p3counter++;
        } else if (x >= 600 && x < 800) {
            p4counter++;
        } else {
            p5counter++;
        }
    } 
    
    let p1 = p1counter / n * 100;
    let p2 = p2counter / n * 100;
    let p3 = p3counter / n * 100;
    let p4 = p4counter / n * 100;
    let p5 = p5counter / n * 100;
    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
    console.log(p4.toFixed(2) + "%");
    console.log(p5.toFixed(2) + "%");

}
histogram([20, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65])
