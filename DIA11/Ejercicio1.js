// create a function that given an string as a parameter returns how many vowels the string had.

function contarLasVocales(string){
    let cont = 0;
    const vowels = ["a","e","i","o","u"]
    for (let i = 0; i < string.length; i++){
        if (vowels.includes(String[i])){
            cont++;
        }
    }
}
console.log(contarLasVocales("Hola Mundo de lululita"));