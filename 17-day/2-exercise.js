// Check if One Integer is Positive and One is Negative
// Write a JavaScript program to check two given integers whether one is positive and another one is negative.


function verify(Integer1, integer2) {
    if (Integer1 < 0) {
        console.log("the integer number one is N E G A T I V E")
    } else {
        console.log("the integer number one is P O S I T I V E")
    }

    if (integer2 < 0) {
        console.log("the integer number two is N E G A T I V E")
    } else {
        console.log("the integer number two is P O S I T I V E")
    }

}

verify(60, -80)


// ejercicio numero dos donde llegue a incluir la posibilidad de que los numeros fueran 0
function verify(Integer1, integer2) {
    if (Integer1 === 0 || integer2 === 0) {
         console.log("ERROR! is Z E R O")
    } else {
        if (Integer1 < 0) {
            console.log("the integer number one is N E G A T I V E")
        } else {
            console.log("the integer number one is P O S I T I V E")
        }

        if (integer2 < 0) {
            console.log("the integer number two is N E G A T I V E")
        } else {
            console.log("the integer number two is P O S I T I V E")
        }
    }
}

verify(0, 0)


//aqui cree una funcion que no imprime nada, solo retorna.

function verify(Integer1, integer2){
    if (Integer1 < 0 || integer2 < 0 ){
        return false;
    }else{
        return true;
    }
}

console.log(verify(60, -80));
