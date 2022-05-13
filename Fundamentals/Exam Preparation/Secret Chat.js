function secretChat(input) {
  let codingSentence = input.shift();

  for (let line of input) {
    line = line.split(":|:");

    let command = line[0];

    if (command === "InsertSpace") {
      let index = line[1];
      let left = codingSentence.slice(0, index);
      let right = codingSentence.slice(index, codingSentence.length);
      codingSentence = left + " " + right;
      console.log(codingSentence);
    } else if (command === "Reverse") {
      let substring = line[1];
      let index = codingSentence.indexOf(substring);

      if (index !== -1) {
        let left = codingSentence.slice(0, index);
        let right = codingSentence.slice(index + substring.length);

        substring = substring.split("");
        substring = substring.reverse();
        substring = substring.join("");
        codingSentence = left + right + substring;
        console.log(codingSentence);
      } else {
        console.log("error");
      }
    } else if (command === "ChangeAll") {
      let substring = line[1];
      let replacement = line[2];
      codingSentence = codingSentence.split(substring).join(replacement);
      console.log(codingSentence);
    } else if (command === "Reveal") {
      console.log(`You have a new text message: ${codingSentence}`);
    }
  }
}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);

// •	"InsertSpace:|:{index}":
// o	Inserts a single space at the given index. The given index will always be valid.
// •	"Reverse:|:{substring}":
// o	If the message contains the given substring, cut it out, reverse it and add it at the end of the message.
// o	If not, print only "error".
// o	This operation should replace only the first occurrence of the given substring if there are two or more occurrences.
// •	"ChangeAll:|:{substring}:|:{replacement}":
// o	Changes all occurrences of the given substring with the replacement text.
