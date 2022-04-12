function timeAdd15Minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let timeinMin = hours * 60 + minutes;
    timeinMin = timeinMin + 15;
    let h = Math.floor(timeinMin / 60);
    let m = timeinMin % 60;
    if (h >= 24) {
        h = 0;
    } if (m < 10) {
        console.log(`${h}:0${m}`);
    } else {
        console.log(`${h}:${m}`);
    }
}
timeAdd15Minutes(["1", "46"])