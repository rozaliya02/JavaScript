function trekkingMania(input) {
    let index = 0;
    let groups = Number(input[index]);
    index++;
    let totalPeopleInGroups = 0;

    let musalaCount = 0;
    let monblanCount = 0;
    let kilimandjaroCount = 0;
    let k2Count = 0;
    let everestCount = 0;

    for (let i = 0; i < groups; i++) {
        let numofPeopleInGroup = Number(input[index]);
        index++;
        totalPeopleInGroups += numofPeopleInGroup;

        if (numofPeopleInGroup <= 5) {
            musalaCount += numofPeopleInGroup;
        } else if (numofPeopleInGroup <= 12 && numofPeopleInGroup > 5) {
            monblanCount += numofPeopleInGroup;
        } else if (numofPeopleInGroup > 12 && numofPeopleInGroup <= 25) {
            kilimandjaroCount += numofPeopleInGroup;
        } else if (numofPeopleInGroup > 25 && numofPeopleInGroup <= 40) {
            k2Count += numofPeopleInGroup;
        } else {
            everestCount += numofPeopleInGroup
        }
    }
    let percMusala = (musalaCount / totalPeopleInGroups) * 100;
    let percMonblan = (monblanCount / totalPeopleInGroups) * 100;
    let percKilimandjaro = (kilimandjaroCount / totalPeopleInGroups) * 100;
    let percK2 = (k2Count / totalPeopleInGroups) * 100;
    let percEverest = (everestCount / totalPeopleInGroups) * 100;
    console.log(`${percMusala.toFixed(2)}%`);
    console.log(`${percMonblan.toFixed(2)}%`);
    console.log(`${percKilimandjaro.toFixed(2)}%`);
    console.log(`${percK2.toFixed(2)}%`);
    console.log(`${percEverest.toFixed(2)}%`);
} 
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])


