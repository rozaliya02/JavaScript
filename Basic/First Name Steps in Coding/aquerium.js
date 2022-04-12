function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let procentageReverse = Number(input[3]);

    let tankVolume = length * width * height;
    let tankVolumeinDM = tankVolume * 0.001;
    let total = tankVolumeinDM - (tankVolumeinDM * procentageReverse / 100);
    console.log(total)
}
fishTank(["85", "75", "47", "17"])
