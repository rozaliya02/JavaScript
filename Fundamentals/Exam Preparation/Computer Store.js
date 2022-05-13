function computerStore(array) {
  let command = array.pop();
  let taxes = 0;
  let priceWithoutTaxes = 0;
  let totalPrice = 0;

  for (let index = 0; index < array.length; index++) {
    let price = Number(array[index]);
    if (price < 0) {
      console.log("Invalid price!");
    } else {
      priceWithoutTaxes += price;
      let taxesPerOrder = (20 / 100) * price;
      taxes += taxesPerOrder;
      let fullPrice = price + taxesPerOrder;
      totalPrice += fullPrice;
    }
  }

  if (command === "special") {
    let discount = (10 / 100) * totalPrice;
    totalPrice -= discount;
  }

  if (totalPrice <= 0) {
    console.log("Invalid order!");
  } else {
    console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${priceWithoutTaxes.toFixed(2)}$
        Taxes: ${taxes.toFixed(2)}$
        -----------
        Total price: ${totalPrice.toFixed(2)}$`);
  }
}
computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
//     The taxes are 20% of each part's price you receive.
// If the customer is special, he has a 10% discount on the total price with taxes.
// If a given price is not a positive number, you should print "Invalid price!" on the console and continue with the next price.
// If the total price is equal to zero, you should print "Invalid order!" on the console.
// •	The receipt should be in the following format:
// "Congratulations you've just bought a new computer!
// Price without taxes: {total price without taxes}$
// Taxes: {total amount of taxes}$
// -----------
// Total price: {total price with taxes}$"
// Note: All prices should be displayed to the second digit after the decimal point! The discount is applied only on the total price. Discount is only applicable to the final price!
