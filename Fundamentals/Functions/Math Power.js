function mathPower(num, power) {
  let counter = 0;
  let result = 1;
  while (counter < power) {
    result *= num;
    counter++;
  }
  console.log(result);
}
mathPower(3, 4);
