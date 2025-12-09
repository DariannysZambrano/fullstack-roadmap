// Objetivo: Crear una función que reciba un arreglo de números y devuelva 
// cuántos de esos números son pares.

function receiveNum(array){
    let contar = 0;
    for(let index = 0; index<array.length; index++){
        if(array[index] % 2 === 0){
           contar++;
        }else{
            console.log(index); 
        }
    }
}
receiveNum([1,2,3,4,5,6,7,8,9,10])