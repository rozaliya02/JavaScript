function solve(firstWord, secondWord, thirdWord) {
  let sumOfChars = firstWord.length + secondWord.length + thirdWord.length;

  let average = Math.floor(sumOfChars / 3);
  console.log(sumOfChars);
  console.log(average);
}
solve("chocolate", "ice cream", "cake");
