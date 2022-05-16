function theLift(array) {
  let wagonSpace = 4;
  let peopleCount = Number(array.shift());
  let wagons = array.shift().split(" ");
  let counter = 0;
  let isInclude = 0;

  for (let index = 0; index < wagons.length; index++) {
    let currWagon = Number(wagons[index]);
    while (peopleCount > 0) {
      if (currWagon >= wagonSpace) {
        break;
      } else {
        counter = 0;
        while (currWagon < wagonSpace && currWagon < peopleCount) {
          currWagon++;
          counter++;
        }
        wagons.splice(index, 1, currWagon);
        peopleCount -= counter;
      }
    }
  }
  isInclude = wagons.includes("0");
  let isInclude2 = wagons.includes(1);
  let isInclude3 = wagons.includes(2);
  let isInclude4 = wagons.includes(3);
  if (isInclude || isInclude2 || isInclude3 || isInclude4) {
    console.log(`The lift has empty spots! 
    ${wagons.join(" ")}`);
  } else if (peopleCount > 0) {
    console.log(`There isn't enough space! ${peopleCount} people in a queue!
      ${wagons.join(" ")}`);
  } else if ((peopleCount = 0)) {
    console.log(wagons.join(" "));
  }
}
theLift(["15", "0 0 0 0 0"]);
