function schoolGrades(input) {
  let result = new Map();

  for (let lines of input) {
    let tokens = lines.split(" ");
    let name = tokens.shift();
    grades = tokens.map(Number);
    let counter = 0;

    if (!result.has(name)) {
      result.set(name, []);
    }

    let exists = result.get(name);
    for (let grade of grades) {
      exists.push(grade);
    }
  }

  let sorted = Array.from(result);
  sorted.sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));

  for (let [name, grades] of sorted) {
    let averageGrade = 0;
    for (grade of grades) {
      averageGrade += grade;
    }
    averageGrade /= grades.length;
    console.log(`${name}: ${averageGrade.toFixed(2)}`);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
