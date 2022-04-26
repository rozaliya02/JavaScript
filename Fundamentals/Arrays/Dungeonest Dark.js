function DungeonsDark(input) {
  let health = 100;
  let coins = 0;
  let rooms = input[0].split("|");
  let isFinished = true;
  let room = 0;

  for (let index = 0; index < rooms.length; index++) {
    room = rooms[index].split(" ");

    if (room[0] === "potion") {
      let healed = Number(room[1]);

      if (health + healed >= 100) {
        healed = 100 - health;
        health = 100;
      } else {
        health += healed;
      }
      console.log(`You healed for ${healed} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (room[0] === "chest") {
      let foundedCoins = Number(room[1]);
      coins += foundedCoins;
      console.log(`You found ${foundedCoins} coins.`);
    } else {
      let monster = room[0];
      let attack = Number(room[1]);
      health -= attack;
      if (health <= 0) {
        console.log(`You died! Killed by ${monster}.`);
        console.log(`Best room: ${index + 1}`);
        isFinished = false;
        break;
      } else {
        console.log(`You slayed ${monster}.`);
      }
    }
  }
  if (isFinished === true) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

DungeonsDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
