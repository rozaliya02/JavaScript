function softUniBarIncome(input) {
  let finalPrice = 0;

  for (let line of input) {
    let pattern =
      /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>[a-zA-z]+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/gm;
    let result = pattern.exec(line);
    if (result) {
      let totalPricePerProduct =
        Number(result.groups.count) * Number(result.groups.price);
      
      console.log(
        `${result.groups.customer}: ${
          result.groups.product
        } - ${totalPricePerProduct.toFixed(2)}`);
        finalPrice += totalPricePerProduct;
    } else if (line === "end of shift") {
      console.log(`Total income: ${finalPrice.toFixed(2)}`);
    }
  }
}
softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
