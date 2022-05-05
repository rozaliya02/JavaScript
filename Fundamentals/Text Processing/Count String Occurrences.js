function countStringOccurrences(sentence, word) {
  sentence = sentence.split(" ");
  let counter = 0;
  for (let words of sentence) {
    if (words === word) {
      counter++;
    }
  }

  console.log(counter);
}
countStringOccurrences("This is a word and it also is a sentence", "is");
