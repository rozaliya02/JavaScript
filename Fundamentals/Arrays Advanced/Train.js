function Train(array) {
  let wagon = array.shift().split(" ").map(Number);
  let capacityMax = array.shift().split(" ").map(Number);
  for (let index = 0; index < array.length; index++) {
    let processing = array[index].split(" ");
    if (processing[0] === "Add") {
      wagonPush = Number(processing[1]);
      wagon.push(wagonPush);
    } else {
      let passengers = Number(processing[0]);
      for (let i = 0; i < wagon.length; i++) {
        let wagonPassengers = Number(wagon[i]);
        if (wagon[i] + passengers <= capacityMax) {
          let sum = wagonPassengers + passengers;
          wagon.splice(i, 1, sum);
          break;
        }
      }
    }
  }

  console.log(wagon.join(" "));
}
Train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
