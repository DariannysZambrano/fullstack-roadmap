/**
 * Write a JavaScript program to compute the sum of the two given integers.
 * If the two values are the same, then return triple their sum.  
 */


function calculatingIntegers() {
    let integer1 = prompt('ingrese un numero entero');
    let integer1Change = Number(integer1)
    let integer2 = prompt('ingrese un segundo numero entero');
    let integer2Change = Number(integer2)

    let calculatingSum = integer1Change + integer2Change;

    if (integer1Change === integer2Change) {
       let triple = calculatingSum * 3;
       console.log(triple);
    }else{
    console.log(calculatingSum);
    }
}

calculatingIntegers();