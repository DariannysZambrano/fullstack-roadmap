// function multiplicarTablas(num) {
//   for (let index = 1; index <= 10; index++) {
//     let multi = num * index;
//     console.log(num + "*" + index + "=" + multi);
//   }
// }

// multiplicarTablas(5);
// console.log();
// multiplicarTablas(2);

// function sumarValores(valor1) {
//   let sum = 0;
//   for (let index = 1; index <= valor1; index++) {
//     sum1 = sum + index;
//   }return sum1
// }

// console.log(sumarValores(3));


// function sumarValores(valor1) {
//   let sum = 0;
//   for (let index = 1; index <= valor1; index++) {
//     sum = sum + index**2;
//   }return sum
// }

// console.log(sumarValores(2));

function dividir(n, m){
    let resultado = n % m;
    return resultado - n
}

console.log(dividir(13, 4));

// crear una funcion que reciba como parametro un array si dentro de ese array hay otro array va a multiplicar todos esos valores
//input: [2, 3, [2], 4] los valores dentro del array anidado los va a multiplicar por el valor que esta en el array anidado.