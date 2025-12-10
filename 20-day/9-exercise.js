// Crea un array llamado inventario que contenga objetos. Cada objeto debe
//  representar un producto y tener al menos las siguientes propiedades: id (número), nombre (string), precio (número) y stock (número).

// Función para listar: Escribe una función que reciba el inventario
//  y devuelva un nuevo array solo con los nombres de los productos que tienen un stock mayor a 0.

// Función para actualizar stock: Escribe otra función que reciba el inventario,
//  un id de producto y una cantidad. La función debe encontrar el producto por
// su id y restar la cantidad de su propiedad stock. Si el stock es insuficiente, debe imprimir un mensaje de error.

let inventario = [
  { id: 1, nombre: "Laptop", precio: 1200, stock: 5 },
  { id: 2, nombre: "Mouse", precio: 25, stock: 10 },
  { id: 3, nombre: "Monitor", precio: 300, stock: 0 },
  { id: 4, nombre: "pc", precio: 1200, stock: 8},
  { id: 5, nombre: "teclado", precio: 25, stock: -1},
  { id: 6, nombre: "pantalla", precio: 300, stock: 15}
];

    let newArray = [];
function devolverNuevoArray(nuevoInventario){
    for (let index = 0; index < nuevoInventario.length; index++) {
        if(nuevoInventario[index].stock > 0){
           newArray.push(nuevoInventario[index])
        }
    } return newArray;
}

console.log(devolverNuevoArray(inventario));

function actualizarStock (recibirInventario){

}
