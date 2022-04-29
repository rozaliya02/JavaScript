function firstAndLastKNumbers(array) {
  let k = Number(array.shift());
  let firstPart = array.slice(0, k);
  let secondPart = array.slice(-k);
  console.log(firstPart.join(" "));
  console.log(secondPart.join(" "));
}
firstAndLastKNumbers([3, 6, 7, 8, 9]);
