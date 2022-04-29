function distinctArray(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    let curNumber = array[index];
    if (!newArray.includes(curNumber)) {
      newArray.push(curNumber);
    }
  }

  console.log(newArray.join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
