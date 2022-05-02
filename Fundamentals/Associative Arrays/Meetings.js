function meeting(input) {
  let meet = {};

  for (let index = 0; index < input.length; index++) {
    let info = input[index].split(" ");
    let day = info[0];
    let guy = info[1];

    if (meet.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      meet[day] = guy;
      console.log(`Scheduled for ${day}`);
    }
  }
  for (const key in meet) {
    console.log(key, "->", meet[key]);
  }
}

meeting(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
