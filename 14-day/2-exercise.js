/**
 * Write a JavaScript program to check a pair of numbers and return
 * true if one of the numbers is 50 or if their sum is 50.  
 */

function checkPairNumbers(){
let firstData = prompt('Enter a number')
let firstDataChanged = Number(firstData);
let secondData = prompt('Enter the second number')
let secondDataChanged = Number(secondData);

let sumNumbers = firstDataChanged + secondDataChanged;
 if(secondDataChanged || firstDataChanged === 50 ){
    console.log(sumNumbers)
    return true;
 }else if(sumNumbers === 50){
    console.log(sumNumbers)
    return true;
 }
}

checkPairNumbers();