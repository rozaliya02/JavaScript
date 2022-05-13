function heroesOfCoding(input) {
  let heroes = {};
  let numberOfHeroes = input.shift();
  let heroName = "";
  let hp = 0;
  let mp = 0;
  for (let index = 0; index < numberOfHeroes; index++) {
    let heroData = input.shift().split(" ");
    heroName = heroData[0];
    hp = Number(heroData[1]);
    mp = Number(heroData[2]);
    heroes[heroName] = {
      hp,
      mp,
    };
  }

  while (input !== "End") {
    line = input.shift().split(" - ");
    let command = line[0];
    let hero = heroes[heroName];
    console.log(heroName, hero);
    if (command === "Heal") {
      heroName = line[1];
      let amount = Number(line[2]);
      if (heroes.hp + amount > 100) {
        let diff = 100 - heroes.hp;
        heroes.hp = 100;
        console.log(`${heroName} healed for ${diff} HP!`);
      } else {
        hero.hp += amount;
        console.log(`${heroName} healed for ${amount} HP!`);
      }
    } else if (command === "Recharge") {
      heroName = line[1];
      let amount = line[2];
      if (heroes.mp + amount > 200) {
      }
    } else if (command === "TakeDamage") {
      heroName = line[1];
      let damage = line[2];
      let attacker = line[3];
    } else if (command === "CastSpell") {
      heroName = line[1];
      let MPNeeded = line[2];
      let spellName = line[3];
    }
  }
}
heroesOfCoding([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);

// "CastSpell – {hero name} – {MP needed} – {spell name}"
// •	If the hero has the required MP, he casts the spell, thus reducing his MP. Print this message:
// o	"{hero name} has successfully cast {spell name} and now has {mana points left} MP!"
// •	If the hero is unable to cast the spell print:
// o	"{hero name} does not have enough MP to cast {spell name}!"
// "TakeDamage – {hero name} – {damage} – {attacker}"
// •	Reduce the hero HP by the given damage amount. If the hero is still alive (his HP is greater than 0) print:
// o	"{hero name} was hit for {damage} HP by {attacker} and now has {current HP} HP left!"
// •	If the hero has died, remove him from your party and print:
// o	"{hero name} has been killed by {attacker}!"
// "Recharge – {hero name} – {amount}"
// •	The hero increases his MP. If it brings the MP of the hero above the maximum value (200), MP is increased to 200. (the MP can't go over the maximum value).
// •	 Print the following message:
// o	"{hero name} recharged for {amount recovered} MP!"
// "Heal – {hero name} – {amount}"
// •	The hero increases his HP. If a command is given that would bring the HP of the hero above the maximum value (100), HP is increased to 100 (the HP can't go over the maximum value).
// •	 Print the following message:
// o	"{hero name} healed for {amount recovered} HP!"
