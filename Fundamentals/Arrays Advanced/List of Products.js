function listOfProducts(array) {
  let sorted = array.sort();
  for (let index = 0; index < sorted.length; index++) {
    console.log(`${index + 1}.${sorted[index]}`);
  }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
