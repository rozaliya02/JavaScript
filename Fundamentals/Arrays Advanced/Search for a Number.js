function SearchForNumber(arrayOne, arrayTwo) {
  let elementNumber = arrayTwo[0];
  let deletedNumbers = arrayTwo[1];
  let searchingNumber = arrayTwo[2];
  let newArray = [];
  let counter = 0;

  for (let index = 0; index < elementNumber; index++) {
    newArray.push(arrayOne[index]);
  }
  for (let index = 0; index < deletedNumbers; index++) {
    newArray.shift();
  }

  let isInclude = newArray.includes(searchingNumber);
  if (isInclude) {
    for (let index = 0; index < newArray.length; index++) {
      if (newArray[index] === searchingNumber) {
        counter++;
      }
    }
  }

  console.log(`Number ${searchingNumber} occurs ${counter} times.`);
}
SearchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
