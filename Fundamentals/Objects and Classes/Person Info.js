function PersonInfo(firstName, LastName, age) {
  let person = {};
  person.firstName = firstName;
  person.lastName = LastName;
  person.age = age;

  return person;
}

PersonInfo("Peter", "Pan", "20");
