// write a function to find the largets number from the two given positive integres. the two numbers are in the range 40.. 60 inclusive 


// function findLargetsNumber(num1, num2) {
//     if ((num1 <= 60 && num1 >= 40) && (num2 <= 60 && num2 >= 40)) {
//         if (num2 <= num1) {
//             console.log("El numero mayor es " + num1);
//         } else {
//             console.log("El numero mayor es " + num2);
//         }
//     } else{
//          if ((num1 > 60 || num1 < 40) && (num2 > 60 || num2 < 40)) {
//             console.log("ambos numeros se salen de la condicion")
//         } else if (num1 >= 60 || num1 <= 40){
//             console.log("el numero 1 se sale del rango " + num1)
//         } else{
//             console.log("el numero 2 se sale del rango " + num2)
//         }
//     }
// }

// findLargetsNumber(10, 45);

//hacer una funcion 10 y 2,va a imprimir globant hasta que entre
//  al rango del 2 al 10. 

function imprimirNumeros(numero1, numero2){
    for(let i =0; i <= numero1; i++){
        if(i < numero1){
            console.log("Globant")
        }else{
            console.log(i);
        }
    }
}
imprimirNumeros();


