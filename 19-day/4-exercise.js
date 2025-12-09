// Objetivo: Escribir una función que tome un arreglo de números como entrada y retorne el valor del número más grande que se encuentra en él.

function returnLargestNum(array) {
  let maximo = array[0];
  for (let index = 1; index < array.length; index++) {
    if ( array[index] > maximo) {
      maximo = array[index];
    }
  } return maximo;
}

console.log(returnLargestNum([12, 18, 45, 2, 3, 4, 56, 78, 98]));
