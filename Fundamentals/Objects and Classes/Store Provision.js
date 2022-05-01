function StoreProvision(arrayOne, arrayTwo) {
  let storeStock = {};

  for (let index = 0; index < arrayOne.length; index += 2) {
    let currProduct = arrayOne[index];
    storeStock[currProduct] = Number(arrayOne[index + 1]);
  }

  for (let index = 0; index < arrayTwo.length; index += 2) {
    let currProduct = arrayTwo[index];
    if (!storeStock.hasOwnProperty(currProduct)) {
      storeStock[currProduct] = 0;
    }
    storeStock[currProduct] += Number(arrayTwo[index + 1]);
  }

  for (let product in storeStock) {
    console.log(`${product} -> ${storeStock[product]}`);
  }
}
StoreProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
