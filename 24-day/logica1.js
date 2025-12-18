// // Santa ha recibido una lista de regalos, pero algunos están defectuosos.
// //  Un regalo es defectuoso si su nombre contiene el carácter #.
// // Ayuda a Santa escribiendo una función que reciba una lista de nombres de regalos
// //  y devuelva una nueva lista que solo contenga los regalos sin defectos.

// // Ejemplos
// const gifts1 = ['car', 'doll#arm', 'ball', '#train']
// // const good1 = filterGifts(gifts1)
// // console.log(good1)
// // // ['car', 'ball']

// const gifts2 = ['#broken', '#rusty']
// // const good2 = filterGifts(gifts2)
// // console.log(good2)
// // // []

// const gifts3 = []
// // const good3 = filterGifts(gifts3)
// // console.log(good3)

function filterGifts(gifts) {
  const newArray = [];
  gifts.forEach((gift) => {
    if (!gift.includes("#")) {
      newArray.push(gift);
    }
  });
  return newArray;
}
// console.log(filterGifts(gifts1));

function filterGifts(gifts) {
  const newArray = [];
  gifts.forEach((gift) => {
    if (!gift.includes("#")) {
      newArray.push(gift);
    }
  });
  return newArray;
}
// console.log(filterGifts(gifts2));

// La fábrica de Santa ha empezado a recibir la lista de producción de juguetes.
// Cada línea indica qué juguete hay que fabricar y cuántas unidades.
// Los elfos, como siempre, han metido la pata: han apuntado algunos juguetes con cantidades que no tienen sentido.
// Tienes una lista de objetos con esta forma:
// toy: el nombre del juguete (string)
// quantity: cuántas unidades hay que fabricar (number)
// Tu tarea es escribir una función que reciba esta lista y devuelva un array de strings con:
// Cada juguete repetido tantas veces como indique quantity
// En el mismo orden en el que aparecen en la lista original
// Ignorando los juguetes con cantidades no válidas (menores o iguales a 0, o que no sean número)
// :jigsaw: Ejemplos
const production1 = [
  { toy: "car", quantity: 3 },
  { toy: "doll", quantity: 1 },
  { toy: "ball", quantity: 2 },
];
// ['car', 'car', 'car', 'doll', 'ball', 'ball']

const production2 = [
  { toy: "train", quantity: 0 }, // no se fabrica
  { toy: "bear", quantity: -2 }, // tampoco
  { toy: "puzzle", quantity: 1 },
];

function manufactureGifts(producciones) {
  let newArrayToys = [];
  producciones.forEach((produccion) => {
    producciones.quantity.forEach((quantitys) => {
      if (produccion.quantitys > 0) {
        newArrayToys.push(produccion.toy);
      }
    });
  });
  return newArrayToys;
}
console.log(manufactureGifts(production1));

