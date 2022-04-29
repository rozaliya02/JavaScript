function arrayManipulations(array) {
  let numbers = array.shift().split(" ").map(Number);
  let number = 0;
  for (let index = 0; index < array.length; index++) {
    let process = array[index].split(" ");
    let command = process[0];

    switch (command) {
      case "Add":
        number = Number(process[1]);
        numbers.push(number);
        break;
      case "Remove":
        number = Number(process[1]);
        let filtered = numbers.filter(el => el !== number);
        numbers = filtered;
        break;
      case "RemoveAt":
        number = Number(process[1]);
        numbers.splice(number, 1);
        break;
      case "Insert":
        number = Number(process[1]);
        let indexOf = Number(process[2]);
        numbers.splice(indexOf, 0, number);
        break;
    }
  }
  console.log(numbers.join(" "));
}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
// •	Add {number}: add a number to the end of the array
// •	Remove {number}: remove all occurrences of a particular number from the array
// •	RemoveAt {index}: removes number at a given index
// •	Insert {number} {index}: inserts a number at a given index
