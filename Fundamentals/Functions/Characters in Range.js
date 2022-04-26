function charactersInRange(char1, char2) {
  let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
  let endChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
  let charInRangeArray = [];

  for (let index = startChar + 1; index < endChar; index++) {
    charInRangeArray.push(String.fromCharCode(index));
  }

  console.log(charInRangeArray.join(" "));
}
charactersInRange("a", "d");
