function PartyTime(input) {
  let VIPInvitation = new Set();
  let regularInvitation = new Set();

  while (input[0] !== "PARTY") {
    let guest = input.shift();

    if (Number.isNaN(Number(guest[0]))) {
      regularInvitation.add(guest);
    } else {
      VIPInvitation.add(guest);
    }
  }

  for (let guests of input) {
    VIPInvitation.delete(guests);
    regularInvitation.delete(guests);
  }

  console.log(VIPInvitation.size + regularInvitation.size);

  for (let name of VIPInvitation) {
    console.log(name);
  }

  for (let name of regularInvitation) {
    console.log(name);
  }
}
PartyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
