// Ejercicio 1: Verificación simple con if
// Problema:
//  Declara una variable temperatura. Si es mayor a 30, imprime “Hace calor”; si no, imprime “Clima agradable”.

function temperature (temperatureNum){
    if(temperatureNum >30){
        console.log("Hace calor");
    } else{
        console.log("Clima agradable");
    }
}
temperature(45);