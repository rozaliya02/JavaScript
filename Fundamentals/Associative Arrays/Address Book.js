function addressBook(input) {
  let book = {};

  for (let index = 0; index < input.length; index++) {
    let [name, address] = input[index].split(":");
    book[name] = address;
  }

  let entries = Object.entries(book);

  entries.sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));

  for (let [name, address] of entries) {
    console.log(name, "->", address);
  }
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
