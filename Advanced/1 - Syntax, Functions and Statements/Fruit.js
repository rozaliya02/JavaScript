function fruit(product, grams, price) {
  let kilograms = grams / 1000;
  let totalPrice = kilograms * price;
  console.log(
    `I need $${totalPrice.toFixed(2)} to buy ${kilograms.toFixed(
      2
    )} kilograms ${product}.`
  );
}
fruit("orange", 2500, 1.8);
