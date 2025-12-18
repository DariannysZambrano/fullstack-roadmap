/* 1. Calculate Area of Triangle (Sides: 5, 6, 7)

Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  */

//Fórmula de Herón
//A = √[4a²b² - (a² + b² - c²)²]/4

function areaOfTriangle(a, b, c) {
  let semiPerimeter = (a + b + c) / 2;
  let area =
    Math.floor(
      Math.sqrt(
        semiPerimeter *
          (semiPerimeter - a) *
          (semiPerimeter - b) *
          (semiPerimeter - c)
      ) * 100
    ) / 100;
  console.log(area);
}
areaOfTriangle(5, 6, 8);

/*8. Random Integer Guess Game

Write a JavaScript program where the program takes a random integer between 1 and 10, 
and the user is then prompted to input a guess number. The program displays a 
message "Good Work" if the input matches the guess number otherwise "Not matched".  */

/*Math.random() → genera número entre 0 y 0.999...
Math.trunc(0.847362) → elimina decimales */

function guessNumber(userGuess) {
  let RandomNum = Math.floor(Math.random () * 10) +1;
  console.log("the number was: " + RandomNum);
  if (userGuess === RandomNum) {
    console.log("Good Work");
  } else {
    console.log("Not matched");
  }
}

guessNumber(7);

/*11. Convert Temperatures Between Celsius and Fahrenheit

Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in 
 Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C */

// 16. Sum Two Integers (Triple if Equal)

// Write a JavaScript program to compute the sum of the two given integers.
// If the two values are the same, then return triple their sum.

function sumTwoIntegers(int1, int2) {
  let sum = int1 + int2;
  if (int1 === int2) {
    let tripleSum = sum * 3;
    return tripleSum;
  }
  return sum;
}
console.log(sumTwoIntegers(8, 5));


// 18. Check if Number or Sum is 50

// Write a JavaScript program to check a pair of numbers and return true
// if one of the numbers is 50 or if their sum is 50.

function checkFifty(num1, num2) {
    let sum = num1 + num2
    if((num1 === 50) || (num2 === 50) || (sum === 50)){
        return true
    }else{
        return false
    }
}
console.log(checkFifty(10, 25))

