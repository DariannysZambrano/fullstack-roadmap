// Check if Array Contains 1 or 3
// Write a JavaScript program to test whether an
// array of integers of length 2 contains 1 or 3.

function arrayContains1or3 (array){
    console.log(array.includes(1) || array.includes(3));
}

arrayContains1or3([1,2]);