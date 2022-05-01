function Inventory(array) {
  let heroesInfo = [];
  for (let index = 0; index < array.length; index++) {
    let info = array[index].split(" / ");
    let heroName = info[0];
    let level = Number(info[1]);
    let inventory = info[2].split(", ").join(", ");

    let heroes = { hero: heroName, level: level, Items: inventory };

    heroesInfo.push(heroes);
  }

  heroesInfo.sort((a, b) => a.level - b.level);
  for (let keys of heroesInfo) {
    console.log(`Hero: ${keys.hero}`);
    console.log(`level => ${keys.level}`);
    console.log(`items => ${keys.Items}`);
  }
}
Inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
//     Hero: {heroName}
// level => {heroLevel}
// Items => {item1}, {item2}, {item3}
