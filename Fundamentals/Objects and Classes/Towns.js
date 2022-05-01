function towns(array) {
  let town = {};

  for (let index = 0; index < array.length; index++) {
    let tokens = array[index].split(" | ");
    town.town = tokens[0];
    town.latitude = Number(tokens[1]).toFixed(2);
    town.longitude = Number(tokens[2]).toFixed(2);
    console.log(town);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
// The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers.
// Check the examples to get a better understanding of your task.
// The output should be objects. Latitude and longitude must be parsed to numbers and formatted to the second decimal point!
