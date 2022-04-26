function OddAndEvenSum(input) {
  let num = String(input);
  let number = 0;
  let oddSum = 0;
  let evenSum = 0;

  for (let index = 0; index < num.length; index++) {
    number = Number(num[index]);
    if (number % 2 === 0) {
      evenSum += number;
    } else {
      oddSum += number;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
OddAndEvenSum(1000435);
