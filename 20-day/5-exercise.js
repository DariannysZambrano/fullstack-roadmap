// Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers.


function arrayFirstAndLast(array) {
  if((array[0] === 1) || (array.at(-1) === 1)){
    return true;
  }else{
    return false
  }
}

console.log(arrayFirstAndLast([12, 23, 34, 56, 78]));