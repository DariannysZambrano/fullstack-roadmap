// Check if Array Does Not Contain 1 or 3
// Write a JavaScript program to test whether
// an array of integers of length 2 does not
// contain 1 or 3.

function arrayDoesNotContain1or3(array) {
  let result = array.filter(array => array !== 1 && array !== 3);
  console.log(result)
}
arrayDoesNotContain1or3([1, 3, 4, 5]);
