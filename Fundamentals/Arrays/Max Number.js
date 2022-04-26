function MaxNumber(arr) {
  let array = arr;
  let topIntegers = [];

  for (let index = 0; index < array.length; index++) {
    let isTopInteger = true;
    let currentNum = array[index];
    for (let i = index + 1; i < array.length; i++) {
      let nextNum = array[i];

      if (currentNum <= nextNum) {
        isTopInteger = false;
        break;
      }
    }
    if (isTopInteger) {
      topIntegers.push(currentNum);
    }
  }

  console.log(topIntegers.join(" "));
}
MaxNumber([14, 24, 3, 19, 15, 17]);
