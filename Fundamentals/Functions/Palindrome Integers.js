function PalindromeIntegers(inputArr) {
  let array = inputArr;
  let number = 0;

  for (let index = 0; index < array.length; index++) {
    number = String(array[index]);
    let lastIndex = number.length - 1;
    if (number[0] === number[lastIndex]) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}

PalindromeIntegers([123, 323, 421, 121]);
