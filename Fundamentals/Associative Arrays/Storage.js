function storage(input) {
  let map = new Map();

  for (let lines of input) {
    let [product, quantity] = lines.split(" ");

    quantity = Number(quantity);

    if (map.has(product)) {
      let exists = map.get(product);
      map.set(product, quantity + exists);
    } else {
      map.set(product, quantity);
    }
  }
  for (let [product, quantity] of map) {
    console.log(product, "->", quantity);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
