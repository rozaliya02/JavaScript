function orders(stock, count) {
  let coffeePrice = 1.5;
  let waterPrice = 1.0;
  let cokePrice = 1.4;
  let snacksPrice = 2.0;
  let totalPrice = 0;

  switch (stock) {
    case "coffee":
      totalPrice = coffeePrice * count;
      break;

    case "water":
      totalPrice = waterPrice * count;
      break;

    case "coke":
      totalPrice = cokePrice * count;
      break;

    case "snacks":
      totalPrice = snacksPrice * count;
      break;
  }

  console.log(totalPrice.toFixed(2));
}
orders("water", 5);
