function PasswordValidation(password) {
  let passwordAsString = String(password);
  let isValid = true;

  if (passwordAsString.length >= 6 && passwordAsString.length <= 10) {
    isValid;
  } else {
    isValid = false;
    console.log("Password must be between 6 and 10 characters");
  }

  for (let index = 0; index < passwordAsString.length; index++) {
    let char = passwordAsString[index];
    let charAsDelNum = char.charCodeAt(0);

    if (
      charAsDelNum >= 65 &&
      charAsDelNum <= 90 &&
      charAsDelNum <= 122 &&
      charAsDelNum >= 97 &&
      charAsDelNum >= 48 &&
      charAsDelNum <= 57
    ) {
      isValid;
    } else {
      isValid = false;
      console.log("Password must consist only of letters and digits");
    }

    let counter = 0;
    if (charAsDelNum >= 48 && charAsDelNum <= 57) {
      counter++;
    }

    if (counter >= 2) {
      isValid;
    } else {
      isValid = false;
      console.log("Password must have at least 2 digits");
    }

    if (isValid) {
      console.log("Password is valid");
    }
  }
}
PasswordValidation("logIn");

// Write a function that checks if a given password is valid. Password validations are:
// •	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// •	It should have at least 2 digits
// If a password is a valid print: "Password is valid".
// If it is NOT valid, for every unfulfilled rule print a message:
// •	"Password must be between 6 and 10 characters"
// •	"Password must consist only of letters and digits"
// •	"Password must have at least 2 digits"
