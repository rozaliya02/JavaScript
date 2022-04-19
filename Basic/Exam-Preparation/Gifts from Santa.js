function giftsfromSanta(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);
    let result = ""
    let isValid = false;

    for (let i = m; i >= n; i--) {

        let numToString = i + "";
        if (i % 2 === 0 && i % 3 === 0) {

            if (i !== s) {
                result += numToString + " "
            }else {
                break;
            }

        }
        
    }
    console.log(`${result}`)
}
    giftsfromSanta(["1",
    "36",
    "12"])
    




