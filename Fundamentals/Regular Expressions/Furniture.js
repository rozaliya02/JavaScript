function furniture(input) {
  let totalPrice = 0;
  console.log("Bought furniture:");
  for (let line of input) {
    if (line === "Purchase") {
      break;
    }

    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(.?\d+))!(?<count>\d+)/;
    let result = pattern.exec(line);
    if (result !== null) {
      console.log(result.groups.name);
      totalPrice += Number(result.groups.price) * Number(result.groups.count);
    }
  }

  console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
