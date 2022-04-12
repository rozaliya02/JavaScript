function foodDelivery(input) {
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegetables = Number(input[2]);
    let sum = chicken * 10.35 + fish * 12.40 + vegetables * 8.15;
    let totalSum = sum + sum * 0.20;
    let result = totalSum + 2.50;
    console.log(result);
}
foodDelivery(["2", "4", "3"])