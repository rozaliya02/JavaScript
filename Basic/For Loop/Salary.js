function salary(input) {
    let index = 0;
    let tabs = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;


    for (let i = 0; i < tabs; i++) {
        let currentTabs = input[index];
        index++;
        if (currentTabs === "Facebook") {
            money -= 150;
        } else if (currentTabs === "Instagram") {
            money -= 100;
        } else if (currentTabs === "Reddit") {
            money -= 50
        }
    }
    if (money <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(money)
    }

}
salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])

