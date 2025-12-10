// Write a JavaScript program to create an array
// taking the middle elements of the two arrays
// of integer and each length 3.

function receiveArrays(array1, array2) {
  let newArray = [];
  newArray.push(array1[1]);
  newArray.push(array2[1]);
  console.log(newArray);
}

receiveArrays([1, 2, 3], [4, 5, 6]);
