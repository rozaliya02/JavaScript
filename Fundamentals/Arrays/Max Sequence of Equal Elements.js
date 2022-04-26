function MaxSequenceOfEqualElements(array) {
  let firstArray = [];
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    firstArray = [];
    for (let j = index; j < array.length; j++) {
      if (array[index] === array[j]) {
        firstArray.push(array[j]);
      } else {
        break;
      }

      if (firstArray.length > newArray.length) {
        newArray = firstArray;
      }
    }
  }
  console.log(newArray.join(" "));
}

MaxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
