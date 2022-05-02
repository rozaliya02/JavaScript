function wordTracker(input) {
  let sentence = input.shift().split(" ");
  let result = {};

  for (let word of sentence) {
    result[word] = 0;
  }

  for (let word of input) {
    if (result.hasOwnProperty(word)) {
      result[word]++;
    }
  }

  let erises = Object.entries(result);
  let sorted = erises.sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);

  for (const [word, count] of sorted) {
    console.log(`${word} - ${count}`);
  }
}
wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
