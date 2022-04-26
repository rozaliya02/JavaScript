function RepeatString(string, repeat) {
  let result = "";
  let counter = 0;
  while (counter < repeat) {
    result += string;
    counter++;
  }

  console.log(result);
}
RepeatString("abc", 3);
