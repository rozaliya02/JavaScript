function PasswordValidator(password) {
  function isLengthEnough(passwordAsString) {
    return passwordAsString.length >= 6 && passwordAsString <= 10;
  }

  function isOnlyLettersAndDigits() {
    for (let charIndex of passwordAsString) {
      let charCurr = charIndex.charCodeAt(0);

      if (
        !(charCurr >= 65 && charCurr <= 90) &&
        !(charCurr <= 122 && charCurr >= 97) &&
        !(charCurr >= 48 && charCurr <= 57)
      ) {
        return false;
      } else {
        return true;
      }
    }
  }

  function isHavingLastTwoDigits(passwordAsString) {
    let counter = 0;

    for (let CharIndex of passwordAsString) {
      let charAsDelNum = CharIndex.charCodeAt(0);

      if (charAsDelNum >= 48 && charAsDelNum <= 57) {
        counter++;
      }
    }

    if (counter >= 2) {
      return true;
    } else {
      return false;
    }
  }

  let isLengthValid = isLengthEnough(password);
  let isHaveLastTwoDigits = isHavingLastTwoDigits(password);
  let isHaveOnlyLetterAndDigits = isOnlyLettersAndDigits(password);
  if (isLengthValid && isHaveLastTwoDigits && isHaveOnlyLetterAndDigits) {
    console.log("Password is valid");
  }
  if (!isLengthValid) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!isHaveLastTwoDigits) {
    console.log("Password must have at least 2 digits");
  }
  if (!isHaveOnlyLetterAndDigits) {
    console.log("Password must consist only of letters and digits");
  }
}

PasswordValidator("logIn");
