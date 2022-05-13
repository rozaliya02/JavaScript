function pirates(input) {
  let result = {};
  while (input[0] !== "Sail") {
    let line = input.shift().split("||");
    let city = line[0];
    let population = Number(line[1]);
    let gold = Number(line[2]);
    if (result.hasOwnProperty(city)) {
      result[city][0] += population;
      result[city][1] += gold;
    } else {
      result[city] = [population, gold];
    }
  }

  while (input[0] !== "End") {
    let tokens = input.shift().split("=>");
    let command = tokens[0];
    let city = tokens[1];

    if (command === "Plunder") {
      let population = Number(tokens[2]);
      let gold = Number(tokens[3]);
      result[city][0] -= population;
      result[city][1] -= gold;
      if (result[city][0] <= 0 || result[city][1] <= 0) {
        console.log(
          `${city} plundered! ${gold} gold stolen, ${population} citizens killed.`
        );
        console.log(`${city} has been wiped off the map!`);
        delete result[city];
      } else {
        console.log(
          `${city} plundered! ${gold} gold stolen, ${population} citizens killed.`
        );
      }
    } else if (command === "Prosper") {
      let gold = Number(tokens[2]);
      if (gold < 0) {
        console.log("Gold added cannot be a negative number!");
      } else {
        result[city][1] += gold;
        console.log(
          `${gold} gold added to the city treasury. ${city} now has ${result[city][1]} gold.`
        );
      }
    }
  }
  let citizensToPrint = Object.values(result).length;
  if (citizensToPrint > 0) {
    console.log(
      `Ahoy, Captain! There are ${citizensToPrint} wealthy settlements to go to:`
    );
  } else {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  }
  Object.entries(result).forEach(key => {
    console.log(
      `${key[0]} -> Population: ${key[1][0]} citizens, Gold: ${key[1][1]} kg`
    );
  });
}

pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
// Events will be in the following format:
// •	"Plunder=>{town}=>{people}=>{gold}"
// o	You have successfully attacked and plundered the town, killing the given number of people and stealing the respective amount of gold.
// o	For every town you attack print this message: "{town} plundered! {gold} gold stolen, {people} citizens killed."
// o	If any of those two values (population or gold) reaches zero, the town is disbanded.
// 	You need to remove it from your collection of targeted cities and print the following message: "{town} has been wiped off the map!"
// o	There will be no case of receiving more people or gold than there is in the city.
// •	"Prosper=>{town}=>{gold}"
// o	There has been dramatic economic growth in the given city, increasing its treasury by the given amount of gold.
// o	The gold amount can be a negative number, so be careful. If a negative amount of gold is given, print: "Gold added cannot be a negative number!" and ignore the command.
// o	If the given gold is a valid amount, increase the town's gold reserves by the respective amount and print the following message:
// "{gold added} gold added to the city treasury. {town} now has {total gold} gold."
