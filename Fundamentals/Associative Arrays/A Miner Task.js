function AMinerTask(input) {
  let result = {};

  for (let index = 0; index < input.length; index += 2) {
    let resource = input[index];
    if (!result.hasOwnProperty(resource)) {
      result[resource] = Number(input[index + 1]);
    } else {
      result[resource] += Number(input[index + 1]);
    }
  }

  for (const key in result) {
    console.log(`${key} -> ${result[key]}`);
  }
}
AMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
