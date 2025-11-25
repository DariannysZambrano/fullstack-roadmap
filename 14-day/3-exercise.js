/**
 * Write a JavaScript program to create another string by adding "Py" in front of a given string
 * If the given string begins with "Py" return the original string.  
    */

function Py() {
    let message = "helloo! welcome to my english podcast"
    let characters = message.split("")
    console.log(characters);
    let firstTwoCharacters = message.slice(0, 2);
    let devolverCharacters= firstTwoCharacters.join("");

    if (devolverCharacters === "Py") {
        return message;
    }else{
         let newMessage = message + "Py";
            console.log(newMessage);
    }
}

Py();