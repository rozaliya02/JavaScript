function certificateValidation(names, grade) {
  if (grade < 3) {
    console.log("Student does not qualify");
  } else {
    printHeader();
    printName(names);
    formatGrade(grade);
  }
}
function printHeader() {
  console.log("~~~-   {@}   -~~~");
  console.log("~- Certificate -~");
  console.log("~~~-  ~---~  -~~~");
}

function printName(nameArr) {
  console.log(nameArr[0] + " " + nameArr[1]);
}
function formatGrade(grade) {
  if (grade < 3) {
    console.log(`Fail (${grade})`);
  } else if (grade >= 3 && grade < 3.5) {
    console.log(`Poor (${grade.toFixed(2)})`);
  } else if (grade >= 3.5 && grade < 4.5) {
    console.log(`Good (${grade.toFixed(2)})`);
  } else if (grade >= 4.5 && grade < 5.5) {
    console.log(`Very good (${grade.toFixed(2)})`);
  } else if (grade >= 5.5 && grade <= 6) {
    console.log(`Excellent (${grade.toFixed(2)})`);
  }
}

function pass(grade) {
  return grade >= 3;
}

certificateValidation(["John", "Smith"], 5.45);
