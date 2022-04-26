// Write a function that checks if a given password is valid. Password validations are:
// •	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// •	It should have at least 2 digits
// If a password is a valid print: "Password is valid".
// If it is NOT valid, for every unfulfilled rule print a message:
// •	"Password must be between 6 and 10 characters"
// •	"Password must consist only of letters and digits"
// •	"Password must have at least 2 digits"

function validPassword(password) {
  let validLength = true;
  if (password.length <= 10 && password.length >= 6) {
    validLength;
  } else {
    validLength = false;
  }
  let isValidConsist = true;
  let isDigitConsist = true;
  for (let digits of password) {
    let charAsDelNum = digits.charCodeAt(0);
    if (
      charAsDelNum >= 65 &&
      charAsDelNum <= 90 &&
      charAsDelNum <= 122 &&
      charAsDelNum >= 97 &&
      charAsDelNum >= 48 &&
      charAsDelNum <= 57
    ) {
      isValidConsist;
    } else if (charAsDelNum >= 48 && charAsDelNum <= 57) {
      counter++;
      if (counter >= 2) {
        isDigitConsist;
      } else {
        isDigitConsist = false;
      }
    } else {
      isValidConsist = false;
    }
  }
  if (isValidConsist && validLength && isDigitConsist) {
    console.log("Password is valid");
  } else if (!validLength) {
    console.log("Password must be between 6 and 10 characters");
  } else if (!isValidConsist) {
    console.log("Password must consist only of letters and digits");
  } else if (!isDigitConsist) {
    console.log("Password must have at least 2 digits");
  }
}
validPassword("logIn");
