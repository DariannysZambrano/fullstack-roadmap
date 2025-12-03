// El Saludo Formal
// Crea una función que reciba un nombre (string) y un género (string: "H" para hombre, "M" para mujer).
// Si el género es "H", devuelve "Bienvenido, Sr. [Nombre]".
// Si el género es "M", devuelve "Bienvenida, Sra.
// Nombre]".
// Si el género es otro, devuelve "Hola, [Nombre]".

function receiveNames(names, gender){
   if (gender.startsWith("h")){
    console.log("Bienvenido, Sr. " + names)
    return
   }else if (gender.startsWith("m")){
    console.log("Bienvenido, Sra. " + names)
    return
   }else{
    console.log("Hola" + names)
   }

}

receiveNames("laura", "hombre");