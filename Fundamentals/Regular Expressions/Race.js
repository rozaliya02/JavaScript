function race(input) {
  let racers = {};
  let names = input.shift().split(", ");

  for (let line of input) {
    if (line === "end of race") {
      break;
    }

    let racersName = line.match(/[A-Z]+/gi).join("");
    let digitsDistance = line.match(/\d/gi).join("");
    let distance = 0;
    for (let num of digitsDistance) {
      distance += Number(num);
    }

    if (names.includes(racersName)) {
      if (racers.hasOwnProperty(racersName)) {
        racers[racersName] += distance;
      } else {
        racers[racersName] = distance;
      }
    }
  }
  let sorted = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);
  console.log(
    `1st place: ${sorted[0]}\n 2nd place: ${sorted[1]}\n 3rd place: ${sorted[2]}`
  );
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
