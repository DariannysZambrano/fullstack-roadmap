// ENUNCIADO:
// Tienes un array con precios de productos.
// Tu tarea es:
// 1. Crear una variable llamada "total" e inicialízala en 0.
// 2. Recorrer el array de "prices" usando un bucle "for".
// 3. En cada vuelta del bucle, suma el precio actual a la variable "total".
// 4. Al final (fuera del bucle), imprime el precio total en la consola.
// */

// const prices = [10, 20, 5, 15, 30];

// Escribe tu código aquí abajo:

let prices = [10, 10, 20, 30, 40, 50, 60];

let total = 0;
for (let index = 0; index < prices.length; index++) {
  total += prices[index];
}
console.log(total);
