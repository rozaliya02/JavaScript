function arrayManipulator(array, commands) {
  let element = 0;
  let index = 0;
  let position = 0;
  for (let i = 0; i < commands.length; i++) {
    let operation = commands[i].split(" ");
    let command = operation[0];

    switch (command) {
      case "add":
        index = Number(operation[1]);
        element = Number(operation[2]);
        array.splice(index, 0, element);
        break;
      case "addMany":
        index = Number(operation[1]);
        operation.splice(0, 2);
        let addingNum = operation.map(Number);
        array.splice(index, 0, ...addingNum);

        break;
      case "contains":
        element = Number(operation[1]);
        let isInclude = array.includes(element);
        if (isInclude) {
          let indexOfNum = array.indexOf(element);
          console.log(indexOfNum);
        } else {
          console.log("-1");
        }
        break;
      case "remove":
        index = Number(operation[1]);
        array.splice(index, 1);
        break;
      case "shift":
        position = Number(operation[1]);

        for (let k = 0; k < position; k++) {
          let currNum = array.shift();
          array.push(currNum);
        }
        break;
      case "sumPairs":
        if (array.length % 2 !== 0) {
          array.push(0);
        }
        let newArr = [];
        for (let z = 0; z < array.length / 2; z++) {
          let sum = array[z] + array[z + 1];
          newArr.push(sum);
        }
        array = newArr;
        break;
      case "print":
        console.log(`[ ${array.join(", ")} ]`);
        break;
    }
  }
}
arrayManipulator(
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
);
//     •	add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).
// •	addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
// •	contains <element> – prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.
// •	remove <index> – removes the element at the specified index.
// •	shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
// o	For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
// •	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
// o	For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
// •	print – stop receiving more commands and print the last state of the array in the following format:
//          `[ {element1}, {element2}, …elementN} ]`
