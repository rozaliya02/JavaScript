function adAstra(input) {
  let text = input[0];
  let pattern =
    /([#\|])(?<product>[A-Z a-z]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>\d+)\1/gm;
  let caloriesPerDay = 2000;
  let result = pattern.exec(text);
  let totalCalories = 0;
  let days = 0;
  while (result !== null) {
    totalCalories += Number(result.groups.calories);
    result = pattern.exec(text);
  }
  days = totalCalories / caloriesPerDay;
  console.log(`You have food to last you for: ${Math.floor(days)} days!`);

  let match = pattern.exec(text);
  while (match !== null) {
    console.log(
      `Item: ${match.groups.product}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`
    );
    match = pattern.exec(text);
  }
}

adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
console.log("--------");

adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
