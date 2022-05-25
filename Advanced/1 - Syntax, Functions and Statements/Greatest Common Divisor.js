function solve(num1, num2) {
  let GCD = 0;
  for (let index = 1; index <= num1 && index <= num2; index++) {
    if (num1 % index === 0 && num2 % index === 0) {
      GCD = index;
    }
  }
  console.log(GCD);
}
solve(15, 5);
