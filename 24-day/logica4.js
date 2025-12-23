// Par o impar
// Crea una función que reciba un número y determine si es par o impar.

function parOImpar(num) {
  if (num % 2 === 0) {
    console.log("par");
  } else {
    console.log("Impar");
  }
}

parOImpar(11);

//  Mayor de dos números
// Recibe dos números y retorna el mayor.

function parOImpar(num1, num2) {
  if (num1 >= num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(parOImpar(5, 50));

//  Número positivo, negativo o cero
// Determina si un número es positivo, negativo o cero.

function parOImpar(num1) {
  if (num1 < 0) {
    return "num negativo";
  } else if (num1 === 0) {
    return "cero";
  } else {
    return "numero positivo";
  }
}

console.log(parOImpar(-6));

// Tabla de multiplicar
// Muestra la tabla de multiplicar de un número del 1 al 10.

function parOImpar(num1) {
  for (let i = 1; i <= 10; i++) {
    let multiplicacion = num1 * [i];
    console.log(num1 + " x " + [i] + " = " + multiplicacion);
  }
}

parOImpar(2);

// Mayor de tres números
// Recibe tres números y devuelve el mayor.

function parOImpar(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num3 && num2 > num1) {
    return num2;
  } else {
    return num3;
  }
}
console.log(parOImpar(80, 50, 90));

// Sumar números de un arreglo
// Suma todos los valores de un arreglo de números.

let array = [2, 2, 2];

function parOImpar(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}

console.log(parOImpar(array));

//  Contar pares
// Cuenta cuántos números pares hay en un arreglo.

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function parOImpar(num) {
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(parOImpar(array2));

// Invertir una cadena
// Invierte un texto recibido como parámetro.

function parOImpar(num) {
  let inver = "";
  for (let i = num.length - 1; i >= 0; i--) {
    inver += num[i];
  }
  return inver;
}

console.log(parOImpar("lolita es la mas linda del mundo"));

// Buscar un número
// Verifica si un número existe dentro de un arreglo.

let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function parOImpar(arr, num) {
  let estado = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      estado = true;
    }
  }
  return estado;
}

console.log(parOImpar(array3, 5));

// Suma de números pares
// Suma solo los números pares de un arreglo.

let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function parOImpar(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      suma += arr[i];
    }
  }
  return suma;
}

console.log(parOImpar(array4));

// Eliminar duplicados
// Elimina los valores repetidos de un arreglo.

let array5 = [1, 2, 2, 3, 4, 4, 5];

function parOImpar(arr) {
  let num = [];
  for (let i = 0; i < arr.length; i++) {
    if (!num.includes(arr[i])) {
      num.push(arr[i]);
    }
  }
  return num;
}

console.log(parOImpar(array5));

//  Convertir a mayúsculas
// Convierte la primera letra de cada palabra a mayúscula.

let frase = "feliz navidad a todos los lindos";
let newFrase = "";

frase = frase.at(0).toUpperCase() + frase.slice(1);

for (let i = 0; i < frase.length; i++) {
  if (frase[i] === " ") {
    newFrase += " ";
    newFrase += frase[i + 1].toUpperCase();
  } else if (frase[i - 1] === " ") {
    newFrase = newFrase;
  } else {
    newFrase += frase[i];
  }
}
console.log(newFrase);


