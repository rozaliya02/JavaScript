function processOddNumbers(array) {
  let filtered = array.filter((x, i) => i % 2 === 1);

  let doubled = filtered.map(x => x * 2);

  let result = doubled.reverse();

  console.log(result.join(" "));
}
processOddNumbers([10, 15, 20, 25]);
// •	Counting in arrays starts from 0
// •	For example –we receive 10, 15, 20, 25
// •	The elements at odd positions are 15 (index 1) and 25 (index 3)
// •	We need to take these two elements and multiply them * 2
// •	Finally, we print them on the console in reversed order
