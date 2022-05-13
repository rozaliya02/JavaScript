function mirrorWords(input) {
  let text = input[0];
  let patter =
    /([#@])(?<words>[a-zA-Z]{3,})([#@]{2})(?<mirror>[a-zA-Z]{3,})([#@])/g;
  let match = patter.exec(text);
  let counter = 0;
  let result = [];

  while (match !== null) {
    counter++;
    let word = match.groups.words;
    let mirror = match.groups.mirror;
    let reversed = mirror.split("").reverse().join("");
    if (word === reversed) {
      result.push(`${word} <=> ${mirror}`);
    }
    match = patter.exec(text);
  }

  if (counter === 0) {
    console.log("No word pairs found!");
  } else {
    console.log(`${counter} word pairs found!`);
  }

  if (result.length === 0) {
    console.log("No mirror words!");
  } else {
    console.log(`The mirror words are:\n ${result.join(", ")}`);
  }
}
mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
