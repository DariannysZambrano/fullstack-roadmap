/* 1. Calculate Area of Triangle (Sides: 5, 6, 7)

Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  */

//Fórmula de Herón
//A = √[4a²b² - (a² + b² - c²)²]/4

function areaOfTriangle(a, b, c) {
  let semiPerimeter = (a + b + c) / 2;
  let area =
    Math.floor(
      Math.sqrt(
        semiPerimeter *
          (semiPerimeter - a) *
          (semiPerimeter - b) *
          (semiPerimeter - c)
      ) * 100
    ) / 100;
  console.log(area);
}
areaOfTriangle(5, 6, 8);

/*2. Random Integer Guess Game

Write a JavaScript program where the program takes a random integer between 1 and 10, 
and the user is then prompted to input a guess number. The program displays a 
message "Good Work" if the input matches the guess number otherwise "Not matched".  */

/*Math.random() → genera número entre 0 y 0.999...
Math.trunc(0.847362) → elimina decimales */

function guessNumber(userGuess) {
  let RandomNum = Math.floor(Math.random() * 10) + 1;
  console.log("the number was: " + RandomNum);
  if (userGuess === RandomNum) {
    console.log("Good Work");
  } else {
    console.log("Not matched");
  }
}

guessNumber(7);

/*3. Convert Temperatures Between Celsius and Fahrenheit

Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in 
 Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C */

// F=(C×9/5)+32

// C=(F−32)×5/9

function convertirGrados(grados) {
  let grado = parseInt(grados);
  if (grados.toLowerCase().includes("c")) {
    let fahrenheit = (grado * 9) / 5 + 32;
    return fahrenheit + "°f";
  } else if (grados.toLowerCase().includes("f")) {
    let Celsius = ((grado - 32) * 5) / 9;
    return Celsius + "°c";
  } else {
    console.log("indica la unidad C o F");
  }
}

console.log(convertirGrados("45F"));

// 4. Sum Two Integers (Triple if Equal)

// Write a JavaScript program to compute the sum of the two given integers.
// If the two values are the same, then return triple their sum.

function sumTwoIntegers(int1, int2) {
  let sum = int1 + int2;
  if (int1 === int2) {
    let tripleSum = sum * 3;
    return tripleSum;
  }
  return sum;
}
console.log(sumTwoIntegers(8, 5));

// 5. Check if Number or Sum is 50

// Write a JavaScript program to check a pair of numbers and return true
// if one of the numbers is 50 or if their sum is 50.

function checkFifty(num1, num2) {
  let sum = num1 + num2;
  if (num1 === 50 || num2 === 50 || sum === 50) {
    return true;
  } else {
    return false;
  }
}
// console.log(checkFifty(10, 25));

// EJERCICIOS CON STRINGS SIN USAR METODOS
//El Espejo (Manual): Escribe una función que reciba una cadena y devuelva la misma cadena invertida.

function invertirStr(str) {
  palabraInvertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    palabraInvertida += str[i];
  }
  return palabraInvertida;
}

console.log(invertirStr("hola mundo mi nombre es"));

// Contador de Vocales: Crea una función que reciba un string y devuelva cuántas vocales tiene.
// Reto: Usa un objeto para llevar la cuenta de cada vocal por separado (ej: {a: 2, e: 1...}).

function contarVocales(str) {
  const minusculasVo = str.toLowerCase();
  const vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let i = 0; i < minusculasVo.length; i++) {
    if (minusculasVo[i] === "a") {
      vocales.a = vocales.a + 1;
    } else if (minusculasVo[i] === "e") {
      vocales.e = vocales.e + 1;
    } else if (minusculasVo[i] === "i") {
      vocales.i = vocales.i + 1;
    } else if (minusculasVo[i] === "o") {
      vocales.o = vocales.o + 1;
    } else if (minusculasVo[i] === "u") {
      vocales.u = vocales.u + 1;
    }
  }
  return vocales;
}

console.log(contarVocales("mama me mima, mama me ama"));

// Contar Vocales Con Regex

function contarVocalesRegex(str) {
  str = str.toLowerCase();
  const vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (const letra of str) {
    if (str.search(/a|e|o|i|u/) !== -1) {
      vocales[letra]++;
    }
  }
  return vocales;
}

console.log(contarVocalesRegex("mama me mima, mama me ama"));

// Buscador de Caracteres: Crea una función que reciba una cadena y una letra.
// Debe devolver cuántas veces aparece esa letra en la cadena.
// Reto: Si la letra no existe, debe devolver un mensaje de error.

function buscarCaracter(str, char) {
  let countChar = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      countChar++;
    } else if (countChar === 0) {
      console.log("error: character not found");
    }
  }
  return countChar;
}
console.log(buscarCaracter("mama me mima, mama me ama", "m"));

// Capitalizador Manual: Recibe una frase en minúsculas y
// convierte la primera letra de cada palabra a mayúscula.
// Reto: No puedes usar .split().
//  Tendrás que detectar los espacios
// vacíos para saber dónde empieza una nueva palabra.

function capitalizarFrase(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      newString += str[i + 1].toUpperCase();
    }
  }
  return newString;
}
console.log(capitalizarFrase("luan es la mas bonita de todo el barrio"));

// Crea una función que reciba este objeto y un nombre. Debe buscar si el nombre está en
// el array usuarios usando un ciclo y devolver "Encontrado" o "No encontrado".

const baseDeDatos = {
  usuarios: ["ana", "pedro", "lucia"],
  activo: true,
};

function findName(object, name) {
  for (let i = 0; i < object.length; i++) {
    for (let j = 0; j < object.usuarios.length; j++) {
      if (object.usuarios[i] === name) {
        console.log("encontrado");
      } else {
        console.log("no encontrado");
      }
    }
  }
}

findName(baseDeDatos, "ana");
