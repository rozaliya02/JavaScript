function employees(array) {
  class Employees {
    constructor(name, personalNum) {
      this.name = name;
      this.personalNum = personalNum;
    }

    speak() {
      console.log(`Name: ${this.name} -- Personal Number: ${this.personalNum}`);
    }
  }

  let newArr = [];

  for (let index = 0; index < array.length; index++) {
    let name = array[index];
    let personalNum = name.length;

    let obj = new Employees(name, personalNum);
    newArr.push(obj);
  }

  for (let tokens of newArr) {
    tokens.speak();
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
