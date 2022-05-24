function solve(input) {
  let count = Number(input.shift());
  let pattern = /!(?<command>[A-Za-z]+)!:\[(?<messege>[A-Za-z]+)\]/gm;
  let finalResult = {};
  let ASCIIArray = [];

  for (let index = 0; index < count; index++) {
    let text = input[index];
    let result = pattern.exec(text);

    if (result === null) {
      console.log("The message is invalid");
    } else {
      let command = result.groups.command;
      let string = result.groups.messege;
      string = string.split("");

      for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let str = char.charCodeAt(0);
        ASCIIArray.push(str);
      }
      finalResult[command] = ASCIIArray;
      console.log(`${command}: ${ASCIIArray.join(" ")}`);
    }
  }
}
solve(["2", "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready"]);
console.log("-------");
solve([
  "3",
  "go:[outside]",
  "!drive!:YourCarToACarWash",
  "!Watch!:[LordofTheRings]",
]);
