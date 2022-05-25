function solve(array) {
  let number = Number(array.shift());

  for (let line of array) {
    if (line === "chop") {
      number /= 2;
    } else if (line === "dice") {
      number = Math.sqrt(number);
    } else if (line === "splice") {
      number++;
    } else if (line === "bake") {
      number *= 3;
    } else if (line === "fillet") {
      number = number - (number * 20) / 100;
    }

    console.log(number);
  }
}
solve(["32", "chop", "chop", "chop", "chop", "chop"]);
solve(["9", "dice", "spice", "chop", "bake", "fillet"]);
