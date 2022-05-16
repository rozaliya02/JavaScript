function worldTour(input) {
  let stops = input.shift();

  for (let line of input) {
    let tokens = line.split(":");
    let command = tokens[0];

    if (command === "Add Stop") {
      let index = tokens[1];
      let city = tokens[2];
      stops = stops.slice(0, index) + city + stops.slice(index);
      console.log(stops);
    } else if (command === "Remove Stop") {
      let startIndex = Number(tokens[1]);
      let lastIndex = Number(tokens[2]);
      lastIndex = lastIndex + 1;
      cut = stops.substring(startIndex, lastIndex);
      stops = stops.split(cut).join("");
      console.log(stops);
    } else if (command === "Switch") {
      let oldString = tokens[1];
      let newString = tokens[2];
      stops = stops.replace(oldString, newString);
      console.log(stops);
    } else if (command === "Travel") {
      console.log(`Ready for world tour! Planned stops: ${stops}`);
    }
  }
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
// Add Stop:{index}:{string}":
// o	Insert the given string at that index only if the index is valid
// •	"Remove Stop:{start_index}:{end_index}":
// o	Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid
// •	"Switch:{old_string}:{new_string}":
// o	If the old string is in the initial string, replace it with the new one (all occurrences)
