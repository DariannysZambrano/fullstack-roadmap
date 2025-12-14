// T A R E A !!

// input: [2, 3, [2], 4]
// output: [4, 6, 8]

// input: [[3], 1, 5, 4]
// output: [3, 15, 12]

// input: [5, 2, 1, 4, 3, [2, 3] 2]
// output: [30, 12, 6, 24, 18, 12]

// input: [1, 2, 3]
// output: [1, 2, 3]

// input: [1, 2, [2], 5, 6, [2]]
// output: [4, 8, 20, 24]

function multiplyArray(array) {
  let fatherArray = [];
  let childArray = [];

  //EVITAR PROXIMO DOLOR DE CABEZA type of RETORNA "number" no "Number" todo en minusculas!!
  // nuevo metodo desbloqueado: .flat sirve para extraer un array anidado

  for (let index = 0; index < array.length; index++) {
    if (typeof array[index] === "number") {
      fatherArray.push(array[index]);
    }else {
      childArray.push(array[index]);
    }
  }
  let nestedArray = childArray.flat();

  let multiplicationResult = 1;
  for (let index = 0; index < nestedArray.length; index++) {
    multiplicationResult = multiplicationResult * nestedArray[index];
  }

  let finalResult = [];
  for (let index = 0; index < fatherArray.length; index++) {
    finalResult.push(fatherArray[index] * multiplicationResult);
  }

  return finalResult;
}

console.log(multiplyArray([2, 3, [2], 4]));
console.log(multiplyArray([[3], 1, 5, 4]));
console.log(multiplyArray([5, 2, 1, 4, 3, [2, 3], 2]));
console.log(multiplyArray([1, 2, 3]));
console.log(multiplyArray([1, 2, [2], 5, 6, [2]]));
