function solve(input) {
  let counterGame = 0;
  let initialEnergy = Number(input.shift());

  for (let line of input) {
    if (line === "End of battle") {
      console.log(`Won battles: ${counterGame}. Energy left: ${initialEnergy}`);
      break;
    } else {
      let distance = Number(line);

      if (distance <= initialEnergy) {
        initialEnergy -= distance;
        counterGame++;
      } else {
        console.log(
          `Not enough energy! Game ends with ${counterGame} won battles and ${initialEnergy} energy`
        );
      }
      if (counterGame % 3 === 0) {
        initialEnergy += counterGame;
      }
    }
  }
}

solve([
  "100",
  "10",
  "10",
  "10",
  "End of battle",
  "1",
  "2",
  "3",
  "6",
  "10",
  "10",
  "1",
  "2",
]);
