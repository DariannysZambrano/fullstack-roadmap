// Objetivo: Escribir una función que tome un arreglo de palabras y 
// devuelva un nuevo arreglo que contenga solo aquellas palabras que comiencen
//  con una vocal ('a', 'e', 'i', 'o', 'u').

function arrayOfWords(array){
    let cadena = String(array);
    const vocales = ('a', 'e', 'i', 'o', 'u')
    for (let index = 0; index < array.length; index++) {
        if(array[index].startsWith(vocales)){

        }
    }
}

 arrayOfWords(["Un", "oso", "anda", "a", "cuatro", "patas", "y", "tiene", 
    "muchos", "amigos", "abuelos", "hermanos", "amorosos"]);
