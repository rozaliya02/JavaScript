function solve(input) {
  let capacity = Number(input.shift());
  let record = {};

  for (let line of input) {
    line = line.split("=");
    let command = line[0];

    if (command === "Statistics") {
    } else if (command === "Add") {
      let username = line[1];
      let sent = Number(line[2]);
      let received = Number(line[3]);
      if (!record.hasOwnProperty(username)) {
        record[username] = [sent, received];
      } else {
        break;
      }
    } else if (command === "Empty") {
      let username = line[1];
      if (username === "All") {
        for (let key in record) {
          delete record[key];
        }
      } else {
        if (record.hasOwnProperty(username)) {
          delete record[username];
        }
      }
    } else if (command === "Message") {
      let sender = line[1];
      let received = line[2];
      if (record.hasOwnProperty(sender) && record.hasOwnProperty(received)) {
        record[sender][0] += 1;
        record[received][1] += 1;

        if (record[sender][0] + record[sender][1] >= capacity) {
          delete record[sender];
          console.log(`${sender} reached the capacity!`);
        } else if (record[received][0] + record[received][1] >= capacity) {
          delete record[received];
          console.log(`${received} reached the capacity!`);
        }
      }
    }
  }
  let usersCount = Object.keys(record).length;
  console.log(`Users count: ${usersCount}`);

  for (let [user, messages] of Object.entries(record)) {
    let allMessages = 0;
    for (let num of messages) {
      num = Number(num);
      allMessages += num;
    }
    console.log(`${user} - ${allMessages}`);
  }
}
solve([
  "10",
  "Add=Berg=9=0",
  "Add=Kevin=0=0",
  "Message=Berg=Kevin",
  "Add=Mark=5=4",
  "Statistics",
]);
console.log("-------");
solve([
  "20",
  "Add=Mark=3=9",
  "Add=Berry=5=5",
  "Add=Clark=4=0",
  "Empty=Berry",
  "Add=Blake=9=3",
  "Add=Michael=3=9",
  "Add=Amy=9=9",
  "Message=Blake=Amy",
  "Message=Michael=Amy",
  "Statistics",
]);
console.log("--------");
solve([
  "12",
  "Add=Bonnie=3=5",
  "Add=Johny=4=4",
  "Empty=All",
  "Add=Bonnie=3=3",
  "Statistics",
]);
// o	"Statistics"
// o	"Add={username}={sent}={received}"
// o	"Message={sender}={receiver}"
// o	"Empty={username}"
// o	"All"
