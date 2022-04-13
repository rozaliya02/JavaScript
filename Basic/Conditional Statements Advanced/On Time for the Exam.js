function OnTimefortheExam(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let ariveHour = Number(input[2]);
    let ariveMin = Number(input[3]);
    let examInMin = examHour * 60 + examMin;
    let ariveInMin = ariveHour * 60 + ariveMin;
    if (ariveInMin > examInMin) {
        console.log("Late");
        let diff = ariveInMin - examInMin;
        if (diff >= 60) {
            let h = Math.floor(diff / 60);
            let min = diff % 60
            if (min < 10) {
                console.log(`${h}:0${min} hours after the start`)
            } else {
                console.log(`${h}:${min} hours after the start`)
            }

        } else {
            let min = diff % 60
            console.log(`${min} minutes after the start`)
        }
    } else if (examInMin - ariveInMin <= 30) {
        console.log("On time");
        let diff = examInMin - ariveInMin;
        if (diff !== 0) {
            let min = diff % 60;
            console.log(`${min} minutes before the start`)
        }
    } else {
        console.log("Early");
        let diff = examInMin - ariveInMin;
        if (diff >= 60) {
            let h = Math.floor(diff / 60);
            let min = diff % 60;
            if (min < 10) {
                console.log(`${h}:0${min} hours before the start`)
            } else {
                console.log(`${h}:${min} hours before the start`)
            }

        } else {
            let min = diff % 60;
            console.log(`${min} minutes before the start`)
        }
    }

} OnTimefortheExam(["11",
    "30",
    "8",
    "12"])





