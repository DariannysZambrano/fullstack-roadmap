// Write a JavaScript program to find the types of a given angle.
//
// Types of angles:
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

function findAngle(num) {
  if (num >= 0 && num < 90) {
    console.log("Acute angle");
  } else if (num === 90) {
    console.log("Right angle");
  } else if (num > 90 && num < 180) {
    console.log("Obtuse angle");
  } else {
    console.log("Straight angle");
  }
}

findAngle(0);
