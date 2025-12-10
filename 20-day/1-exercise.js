// Write a JavaScript program to check whether a given number is in a given range (Num, Start, End)

function rangeNumber(num, Start, end){
    if((num < Start) || (num > end)){
        console.log("esta fuera del rango")
    }else{
        console.log("esta dentro del rango")
    }
}

rangeNumber(30, 50, 100)