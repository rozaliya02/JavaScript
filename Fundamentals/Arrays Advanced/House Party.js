function HouseParty(array) {
  let list = array;
  let finalList = [];

  for (let index = 0; index < list.length; index++) {
    let answer = list[index].split(" ");
    let name = answer[0];
    let confirmation = answer[2];
    if (confirmation === "going!") {
      let isInclude = finalList.includes(name);
      if (!isInclude) {
        finalList.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else {
      let indexOfPerson = finalList.indexOf(name);
      if (indexOfPerson !== -1) {
        finalList.splice(indexOfPerson, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  console.log(finalList.join("\n"));
}
HouseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
