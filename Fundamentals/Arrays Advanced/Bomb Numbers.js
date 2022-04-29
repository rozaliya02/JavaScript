function bombNumbers(arrayOne, arrayTwo) {
  let specialNum = arrayTwo[0];
  let power = arrayTwo[1];

  let indexOfBomb = arrayOne.indexOf(specialNum);

  while (indexOfBomb !== -1) {
    let startExplosionIndex = Math.max(0, indexOfBomb - power);
    let explosionLength = power * 2 + 1;
    arrayOne.splice(startExplosionIndex, explosionLength);
    indexOfBomb = arrayOne.indexOf(specialNum);
  }

  let sum = arrayOne.reduce((a, b) => a + b, 0);
  console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
