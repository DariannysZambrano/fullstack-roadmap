//Create Array with First/Last Elements from Array
// Write a JavaScript program to create an array by
// taking the first and last elements from a given array
// of integers.The length must be larger than or equal to 1.

function arrayFirstAndLast (array){
    console.log( "primer elemento: " + array[0] + " ultimo elemento: " + array[array.length - 1]);
}

arrayFirstAndLast(['mora', 'mango', 'fresa', 'kiwi', 'piña']);