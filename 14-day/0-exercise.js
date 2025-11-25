
// Write a JavaScript program to get the difference between a given number and 13, 
// if the number is broader than 13 return double the absolute difference.  


function calculando() {
    let numeroDado = prompt("ingrese un numero aleatorio")
    const numerito = 13;
    let diferencia = numeroDado - numerito;

    if (numeroDado > numerito) {
        let doble = diferencia * 2;
        console.log(doble);
    } else {
        console.log(diferencia);
    }
}

calculando();
