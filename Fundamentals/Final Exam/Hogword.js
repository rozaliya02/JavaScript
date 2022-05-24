function solve(input) {
  let magicWord = input.shift();

  for (let line of input) {
    line = line.split(" ");
    let command = line[0];

    if (command === "Abracadabra") {
      break;
    } else if (command === "Abjuration") {
      magicWord = magicWord.toUpperCase();
      console.log(magicWord);
    } else if (command === "Necromancy") {
      magicWord = magicWord.toLowerCase();
      console.log(magicWord);
    } else if (command === "Illusion") {
      let index = line[1];
      let letter = line[2];
      if (index >= 0 && index <= magicWord.length) {
        let replacement = magicWord[index];
        magicWord = magicWord.split(replacement).join(letter);
        console.log("Done!");
      } else {
        console.log("The spell was too weak.");
      }
    } else if (command === "Divination") {
      let firstSubstring = line[1];
      let secondSubstring = line[2];
      if (magicWord.includes(firstSubstring)) {
        magicWord = magicWord.split(firstSubstring).join(secondSubstring);
        console.log(magicWord);
      }
    } else if (command === "Alteration") {
      let substring = line[1];
      if (magicWord.includes(substring)) {
        magicWord = magicWord.split(substring).join("");
        console.log(magicWord);
      }
    } else {
      console.log("The spell did not work!");
    }
  }
}
solve(["A7ci0", "Illusion 1 c", "Illusion 4 o", "Abjuration", "Abracadabra"]);
console.log("-------");
solve(["TR1GG3R", "Necromancy", "Illusion 8 m", "Illusion 9 n", "Abracadabra"]);
console.log("------");
solve([
  "SwordMaster",
  "Target Target Target",
  "Abjuration",
  "Necromancy",
  "Alteration master",
  "Abracadabra",
]);

// o	"Abracadabra"
// o	"Abjuration"
// o	"Necromancy"
// o	"Illusion {index} {letter}"
// o	"Divination {first substring} {second substring}"
// o	"Alteration {substring}"
