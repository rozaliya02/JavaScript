function City(object) {
  for (let key of Object.keys(object)) {
    console.log(`${key} -> ${object[key]}`);
  }
}
City({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
