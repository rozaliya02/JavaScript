function oddOccurrences(string) {
  let words = string.split(" ");
  let result = {};
  let program = [];

  for (let word of words) {
    word = word.toLocaleLowerCase();
    if (result.hasOwnProperty(word)) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }

  for (let item in result) {
    if (result[item] % 2 === 1) {
      program.push(item);
    }
  }

  console.log(program.join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
