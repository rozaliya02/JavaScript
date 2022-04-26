function MagicSum(array, magicNum) {
  for (let index = 0; index < array.length - 1; index++) {
    let currentNum = array[index];

    for (let j = index + 1; j < array.length; j++) {
      let nextNum = array[j];
      let sum = currentNum + nextNum;
      if (sum === magicNum) {
        console.log(`${currentNum} ${nextNum}`);
      }
    }
  }
}

MagicSum([1, 7, 6, 2, 19, 23], 8);
