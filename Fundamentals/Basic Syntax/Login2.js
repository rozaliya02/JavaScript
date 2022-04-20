function Login(array) {
  let username = array.shift();
  let reversed = username.split("");
  let password = reversed.reverse().join("");
  let counter = 0;

  for (let line of array) {
    if (line === password) {
      console.log(`User ${username} logged in.`);
    } else {
      counter++;
      if (counter > 3) {
        console.log(`User ${username} blocked!`);
        break;
      }
      console.log("Incorrect password. Try again.");
    }
  }
}
Login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
