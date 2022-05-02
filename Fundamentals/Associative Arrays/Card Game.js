function CardGame(input) {
  let suits = {
    C: 1,
    D: 2,
    H: 3,
    S: 4,
  };

  let power = {
    1: 10,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  let players = {};

  for (let line of input) {
    let [name, cards] = line.split(": ");
    cards = cards.split(", ");

    if (!players.hasOwnProperty(name)) {
      players[name] = new Set();
    }

    for (let card of cards) {
      players[name].add(card);
    }
  }

  for (let [name, cards] of Object.entries(players)) {
    let totalPower = 0;

    for (let card of cards) {
      let powerOfCard = power[card[0]];
      let powerOfFace = suits[card.slice(-1)];
      totalPower += powerOfCard * powerOfFace;
    }

    console.log(`${name}: ${totalPower}`);
  }
}
CardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
// (S -> 4, H-> 3, D -> 2, C -> 1).
