//  Validador de Contraseñas Simple
// Crea una función que reciba una contraseña (string) y verifique si es segura basándose solo en su longitud.
// Si tiene menos de 5 caracteres, devuelve "Insegura".
// Si tiene entre 5 y 8 caracteres, devuelve "Media".
// Si tiene más de 8 caracteres, devuelve "Segura".

function receivePassword(password) {
    let validation = password.length

    if(validation <5){
        console.log("Insegura")
        return
    } else if (validation <8){
        console.log("Media")
        return
    } else{
        console.log("Segura")
    }
}

receivePassword("hola");

