// :white_check_mark: Ejercicio 2: Clasificación con if...else if
// Problema:
//  Declara una variable nota (0 a 10).
// Si la nota ≥ 9: “Excelente”
// Si la nota ≥ 7: “Bien”
// Si la nota ≥ 5: “Regular”
// Si la nota < 5: “Reprobado”


const note = 5; 

if (note >9) {
    console.log("Excelente")
} else if (note > 6) {
    console.log("Bien")
} else if (note > 4) {
    console.log("Regular")
} else {
    console.log("Reprobado")
}