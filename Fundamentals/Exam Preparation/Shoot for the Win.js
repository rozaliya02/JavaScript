function solve(input) {
  let target = input.shift().split(" ");
  let counter = 0;

  for (let index of input) {
    if (index === "End") {
      console.log(`Shot targets: ${counter} -> ${target.join(" ")}`);
      break;
    }
    let shoot = Number(index);
    if (shoot < target.length) {
      let currShoot = Number(target[shoot]);
      target[shoot] = -1;
      counter++;
      for (let j = 0; j < target.length; j++) {
        if (shoot !== j && target[j] !== -1) {
          let number = Number(target[j]);

          if (currShoot < number) {
            number -= currShoot;
          } else {
            number += currShoot;
          }
          target[j] = number;
        }
      }
    }
  }
}
solve(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);

// Every time you receive an index, you need to shoot the target on that index, if it is possible.
// Every time you shoot a target, its value becomes -1, and it is considered shot. Along with that, you also need to:
// •	Reduce all the other targets, which have greater values than your current target, with its value.
// •	Increase all the other targets, which have less than or equal value to the shot target, with its value.
// Keep in mind that you can't shoot a target, which is already shot. You also can't increase or reduce a target, which is considered shot.
// When you receive the "End" command, print the targets in their current state and the count of shot targets in the following format:
// "Shot targets: {count} -> {target1} {target2}… {targetn}"
