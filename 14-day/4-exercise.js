/**
 * Write a JavaScript program to remove a character at the specified
 * position in a given string and return the modified string.  
 */

function remove() {
    let message = "helloo! welcome to my english podcast"
    let characters = message.split("")
    console.log(characters);

    delete characters[17]
    delete characters[18]
    delete characters[19]
    delete characters[20]
    delete characters[21]

   let newMessage = characters.join("");
    return newMessage;
}

remove();


//Ensayo

function remove() {
    let message = "helloo! welcome to my english podcast"
    let characters = message.split("")
    console.log(characters);

    let guardarEliminado = characters.slice(0, 1);

   let newMessage = guardarEliminado.join("");
    return newMessage;
}

remove();