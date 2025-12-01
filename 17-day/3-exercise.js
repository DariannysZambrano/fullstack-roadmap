// //  Check if Number is Multiple of 3 or 7
// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7

function checkMultiple(number) {
    if (number % 3 || number % 7) {
        return true;
    } else {
        return false;
    }
}
console.log(checkMultiple(24));


