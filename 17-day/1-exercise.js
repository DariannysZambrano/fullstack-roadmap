/*8. Random Integer Guess Game. Write a JavaScript program where the
 program takes a random integer between 1 and 10, and the user is then
  prompted to input a guess number. The program displays a message "Good Work" if the input
   matches the guess number otherwise "Not matched".*/

   let userNumber = Number(prompt("Ingrese un numero del 1 al 10"));

   let randomNumber = Math.floor(Math.random() * 10 + 1)
   if(randomNumber === userNumber ){
    console.log("Good Work")
   }else{
    "Not matched"
   }

