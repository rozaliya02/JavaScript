function sortAnArrayBy2Criteria(array) {
  let firstSorting = array.sort((a, b) => a.length - b.length);
  let result = firstSorting.sort((a, b) => a.localeCompare(b));
  console.log(result.join("\n"));
}
sortAnArrayBy2Criteria(["Isaac", "Theodor", "Jack", "Harrison", "George"]);
