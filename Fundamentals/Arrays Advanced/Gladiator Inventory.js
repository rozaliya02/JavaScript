function GladiatorInventory(array) {
  let inventory = array.shift().split(" ");
  let equipment = 0;
  let isInclude = 0;
  let indexOfEquipment = 0;

  for (let i = 0; i < array.length; i++) {
    let tokens = array[i].split(" ");
    let command = tokens[0];

    switch (command) {
      case "Buy":
        equipment = tokens[1];
        isInclude = inventory.includes(equipment);
        if (!isInclude) {
          inventory.push(equipment);
        }
        break;
      case "Trash":
        equipment = tokens[1];
        isInclude = inventory.includes(equipment);
        if (isInclude) {
          indexOfEquipment = inventory.indexOf(equipment);
          inventory.splice(indexOfEquipment, 1);
        }
        break;
      case "Repair":
        equipment = tokens[1];
        isInclude = inventory.includes(equipment);
        if (isInclude) {
          indexOfEquipment = inventory.indexOf(equipment);
          inventory.splice(indexOfEquipment, 1);

          inventory.push(equipment);
        }
        break;
      case "Upgrade":
        equipment = tokens[1].split("-");
        let currEquip = equipment[0];
        let currEquipArr = equipment.join(":");
        isInclude = inventory.includes(currEquip);
        if (isInclude) {
          indexOfEquipment = inventory.indexOf(currEquip);
          inventory.splice(indexOfEquipment + 1, 0, currEquipArr);
        }
        break;
    }
  }
  console.log(inventory.join(" "));
}
GladiatorInventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);

// •	Buy {equipment}
// •	Trash {equipment}
// •	Repair {equipment}
// •	Upgrade {equipment}-{upgrade}
// If you receive the Buy command, you should add the equipment at the last position in the inventory, but only if it isn't bought already.
// If you receive the Trash command, delete the equipment if it exists.
// If you receive the Repair command, you should repair the equipment if it exists and place it in the last position.
// If you receive the Upgrade command, you should check if the equipment exists and insert after it the upgrade in the following format: "{equipment}:{upgrade}".
