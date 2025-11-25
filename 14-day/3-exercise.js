/**
 * Write a JavaScript program to create another string by adding "Py" in front of a given string
 * If the given string begins with "Py" return the original string.  
    */

function Py() {
    let message = prompt("Ingrese un mensaje");
    let characters = message.split("")
    console.log(characters);
    let firstTwoCharacters = message.slice(0, 2);
    if (firstTwoCharacters === "Py") {
        return message;
    }
}
