/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function invertir(string) {
  let palabraInvertida = "";
  for (let i = string.length - 1; i >= 0; i--) {
    palabraInvertida += string[i];
  }
  return palabraInvertida;
}
console.log(invertir("hola mundo"));

function reverseWithForEach(text) {
  const characters = text.split("");
  let reversedText = "";
  characters.forEach((char) => {
    reversedText = char + reversedText;
  });
  return reversedText;
}
console.log(reverseWithForEach("Hola mundo"));

/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * 
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * 
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

function recibirDosCadenas(str1,str2){
    let string1 = ""
    let string2 = ""

    for (let i = 0; i < str1.length; i++){ 
    }

    for (let J = 0; J < str2.length; J++){
    }
}

