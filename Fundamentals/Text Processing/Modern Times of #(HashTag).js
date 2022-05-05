function modernTime(input) {
  let sentence = input.split(" ");

  for (let word of sentence) {
    let isStart = word.startsWith("#");
    if (isStart && word.length > 1) {
      word = word.substring(1);
      for (let letter of word) {
        let asciiCode = letter.charCodeAt(0);
        if (
          (asciiCode >= 65 && asciiCode <= 90) ||
          (asciiCode >= 97 && asciiCode <= 122)
        ) {
          console.log(word);
        } else {
          break;
        }
      }
    }
  }
}
modernTime(
  "Nowadays everyone #spec12ial uses # to tag a #special word in #socialMedia"
);
//
