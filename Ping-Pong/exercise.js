// Reglas:
// - El juego se juega entre 2 jugadores
// - El jugador 1 comienza sacando
// - Se cambia de saque cada 2 puntos
// - Gana el primero que llegue a 11 puntos
// Objetivo:
// Crear una función que reciba:
// - Nombre del jugador 1
// - Nombre del jugador 2
// - Puntos actuales del jugador 1
// - Puntos actuales del jugador 2
// La función debe retornar:
// - Quién debe sacar en este momento
// - Si el juego ha terminado y quién ganó

function receiveNamesAndPoints(namePlayer1, namePlayer2,  pointPlayer1, pointPlayer2 ) {
    let totalPuntos = pointPlayer1 + pointPlayer2
    
    if(pointPlayer1 === 11){
        console.log("La ganadora es " + namePlayer1 + " !! 🎉🎊🎀😸")
        return
    }else if(pointPlayer2 === 11){
         console.log("La ganadora es " + namePlayer2 + " !! 🎨🎈🧨✨")
         return;
    }

    if(totalPuntos %2){
        console.log("Saca el jugador: " + namePlayer2)
    }else{
         console.log("Saca el jugador: " + namePlayer1)
    }
}

receiveNamesAndPoints("luan", "dary", 10,11);