function TheImitationGame(input) {
  let codingWord = input.shift();

  for (let line of input) {
    let tokens = line.split("|");
    let command = tokens[0];
    if (command === "Decode") {
      console.log(`The decrypted message is: ${codingWord}`);
      break;
    } else if (command === "ChangeAll") {
      let substring = tokens[1];
      let replacement = tokens[2];
      while (codingWord.includes(substring)) {
        codingWord = codingWord.replace(substring, replacement);
      }
    } else if (command === "Insert") {
      let index = Number(tokens[1]);
      let value = tokens[2];
      let start = codingWord.substring(0, index);
      let end = codingWord.substring(index);
      codingWord = start + value + end;
    } else if (command === "Move") {
      let num = Number(tokens[1]);
      let start = codingWord.substring(0, num);
      let end = codingWord.substring(num);
      codingWord = end + start;
    }
  }
}
TheImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);

// •	"Move {number of letters}":
// o	Moves the first n letters to the back of the string
// •	"Insert {index} {value}":
// o	Inserts the given value before the given index in the string
// •	"ChangeAll {substring} {replacement}":
// o	Changes all occurrences of the given substring with the replacement text
