//  * Crea una funcion que analice texto y obtenga:
//  * - Número total de palabras.
//  * - Longitud media de las palabras.
//  * - Encuentre la palabra más larga.

function analizarTexto(texto) {
   const resultado = {
    totalPalabras: 0,
    promeido: 0;
    }

  for (let i = 0; i < palabraSplit.length; i++) {
    palabraLarga ++
    
  }
  return palabraLarga;
}

console.log(analizarTexto("hola buenos dias compañeros como estan"));

// recibir un string y reversarlo

// function reversar (frase){
//     let reFrase = "";
//     for (let i = frase.length - 1; i > 0; i--) {
//         reFrase += frase[i]
//     }
//     return reFrase
// }

// console.log(reversar(" lolita es la mas linda del mundo"))

// function reversar (frase){
//     let count = 0;
//     for (let i = 0; i < frase.length; i++) {
//         if(frase[i] === " "){
//             count ++
//         }
//     }
//     return count;
// }

// console.log(reversar("lolita es la mas linda del mundo"));

// function asteriscos(num){
//     let simbolo = ""
// for (let i = 0; i < num; i++) {
//     simbolo += "*"
// }
//     return simbolo
// }

// console.log(asteriscos(5));

// function createSquare(num) {
//   console.log("*".repeat(num));
//   for (let i = 0; i < num -2; i++) {
//     const simbolo = "*" + " ".repeat(num - 2) + "*";
//     console.log(simbolo);
//   }
//   console.log("*".repeat(num));
// }
// createSquare(5);


// function createSquare(text) {
//     let palabraLarga = "";
//     let fraseSp = text.split(" ")
//     for (let i = 0; i < fraseSp.length; i++) {
//         if(fraseSp[i].length > palabraLarga.length){
//             palabraLarga = fraseSp[i]
//         }
//     }
//   console.log("*".repeat(palabraLarga.length + 4));

//    for (let i = 0; i < fraseSp.length; i++) {
//     const palabraMasEspacio = fraseSp[i] + " ".repeat(palabraLarga.length - fraseSp[i].length);
//     console.log("* " + palabraMasEspacio + " *")
//     }
//     console.log("*".repeat(palabraLarga.length + 4));
// }
// createSquare("hola mundo lolita");

