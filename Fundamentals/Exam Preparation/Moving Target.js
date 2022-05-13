function solve(input) {
  let target = input.shift().split(" ");

  for (let line of input) {
    line = line.split(" ");
    let command = line[0];

    if (command === "Shoot") {
      let index = line[1];
      let power = line[2];
      let currTarget = target[index];
      if (currTarget > 0) {
        currTarget -= power;
        target[index] = currTarget;
      }
    } else if (command === "Strike") {
      let index = line[1];
      let radius = line[2];
      let startExplosionIndex = Math.max(0, index - radius);
      let explosionLength = radius * 2 + 1;
      target.splice(startExplosionIndex, explosionLength);
    } else if (command === "Add") {
      let index = line[1];
      let value = line[2];
      if (index < target.length) {
        target[index] = value;
      } else {
        console.log("Invalid placement!");
      }
    } else if (command === "End") {
      console.log(target.join("|"));
    }
  }
}
solve([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);
console.log("----------");
solve(["1 2 3 4 5", "Strike 0 1", "End"]);

// •	"Shoot {index} {power}"
// o	Shoot the target at the index if it exists by reducing its value by the given power (integer value).
// o	Remove the target if it is shot. A target is considered shot when its value reaches 0.
// •	"Add {index} {value}"
// o	Insert a target with the received value at the received index if it exists.
// o	If not, print: "Invalid placement!"
// •	"Strike {index} {radius}"
// o	Remove the target at the given index and the ones before and after it depending on the radius.
// o	If any of the indices in the range is invalid, print: "Strike missed!" and skip this command.
//  Example:  "Strike 2 2"
// 	{radius}	{radius}	{strikeIndex}	{radius}	{radius}

// •	"End"
// o	Print the sequence with targets in the following format and end the program:
// "{target1}|{target2}…|{targetn}"
