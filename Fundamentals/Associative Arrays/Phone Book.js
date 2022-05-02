function phoneBook(input) {
  let myAssArray = {};

  for (let index = 0; index < input.length; index++) {
    let info = input[index].split(" ");
    let name = info[0];
    let phoneNumber = info[1];

    myAssArray[name] = phoneNumber;
  }

  for (const key in myAssArray) {
    console.log(`${key} -> ${myAssArray[key]}`);
  }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
