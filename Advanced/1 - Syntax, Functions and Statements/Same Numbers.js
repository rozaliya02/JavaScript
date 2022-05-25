function solve(number) {
  let numberAsString = String(number);
  let isSame = true;
  let sumOfDigits = 0;
  let numOfDigit = 0;
  for (let index = 0; index < numberAsString.length - 1; index++) {
    sumOfDigits += Number(numberAsString[index]);
    numOfDigit = Number(numberAsString[index + 1]);
    if (isSame) {
      if (Number(numberAsString[index]) === Number(numberAsString[index + 1])) {
        isSame;
      } else {
        isSame = false;
      }
    }
  }
  sumOfDigits += numOfDigit;
  console.log(isSame);
  console.log(sumOfDigits);
}
solve(1234);
