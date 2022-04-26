function SmallestOfThreeNumbers(num1, num2, num3) {
  let smallestNum = 0;
  if (num1 <= num2 && num1 <= num3) {
    smallestNum = num1;
  } else if (num2 <= num1 && num2 <= num3) {
    smallestNum = num2;
  } else if (num3 <= num1 && num3 <= num2) {
    smallestNum = num3;
  }

  console.log(smallestNum);
}
SmallestOfThreeNumbers(2, 5, 3);
