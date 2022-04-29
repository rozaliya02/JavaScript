function negativeOrPositiveNumbers(array) {
  let result = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] < 0) {
      result.unshift(array[index]);
    } else {
      result.push(array[index]);
    }
  }

  console.log(result.join("\n"));
}
negativeOrPositiveNumbers(["7", "-2", "8", "9"]);
