function lastKNumbersSequence(n, k) {
  let myArr = [1];

  for (let index = 0; index < n - 1; index++) {
    let lastK = myArr.slice(-k);
    let sum = 0;

    for (let element of lastK) {
      sum += element;
    }
    myArr.push(sum);
  }

  console.log(myArr);
}

lastKNumbersSequence(6, 3);
// •	The first element is 1.
// •	Every following element equals the sum of the previous k elements.
// •	The length of the sequence is n elements.
