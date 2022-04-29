function Sorting(array) {
  array.sort((a, b) => b - a);
  let newArray = [];
  while (array.length > 0) {
    let biggestNum = array.shift();
    let smallestNum = array.pop();
    newArray.push(biggestNum);
    newArray.push(smallestNum);
  }
  console.log(newArray.join(" "));
}
Sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
