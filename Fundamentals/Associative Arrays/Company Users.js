function CompanyUsers(input) {
  let result = {};

  for (let line of input) {
    let [company, ID] = line.split(" -> ");

    if (!result.hasOwnProperty(company)) {
      result[company] = new Set();
    }

    result[company].add(ID);
  }

  let final = Object.entries(result);

  let sorted = final.sort();
  for (let [company, ID] of sorted) {
    console.log(company);

    for (let digits of ID) {
      console.log(`-- ${digits}`);
    }
  }
}
CompanyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
