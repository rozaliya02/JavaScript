function EqualArrays(array1, array2) {
  let num = 0;
  let sum = 0;
  let isEqual = false;

  for (let index = 0; index < array1.length; index++) {
    num = Number(array1[index]);
    sum += num;

    if (array1[index] === array2[index]) {
      isEqual = true;
    } else {
      isEqual = false;
      console.log(
        `Arrays are not identical. Found difference at ${index} index`
      );
      break;
    }
  }
  if (isEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

EqualArrays(["10", "20", "30"], ["10", "20", "30"]);
console.log("--------");
EqualArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
