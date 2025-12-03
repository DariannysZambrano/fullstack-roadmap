
// for (let i = 1; i < 101; i++) {
//     console.log(i)
//     if (i % 3 ===0 && i % 5 ===0) {
//         console.log("FizzBuzz")
//     } else if (i % 3 ===0) {
//         console.log("Fizz")
//     } else if (i % 5 ===0) {
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }
// }

function rot13(stirng) {
    let abd = "abcdefghijklmnopqrstuvwxyz"
    let variable = stirng.split("");
    for (let i = 0; i < variable.length; i++) {
        console.log(stirng[i])
    }
}

rot13("Hola mundo");