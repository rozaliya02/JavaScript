function StringSubstring(searchingWord, sentence) {
  let words = sentence.split(" ");

  for (let word of words) {
    if (searchingWord.toLowerCase() === word.toLowerCase()) {
      console.log(word.toLowerCase());
      return;
    }
  }
  console.log(`${searchingWord} not found!`);
}
StringSubstring("javascript", "JavaScript is the best programming language");
