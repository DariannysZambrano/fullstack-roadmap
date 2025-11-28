//  Ejercicio 4: Validación combinada
// Problema:
//  Declara usuarioActivo = true y rol = "admin".
// Si el usuario está activo y es admin: “Acceso total”
// Si está activo y no es admin: “Acceso limitado”
// Si no está activo: “Acceso denegado”
//  Objetivo: Practicar operadores lógicos (&&, ||) con if.

let usuarioActivo = false;
let  rol = "no";

if ((usuarioActivo === true) && (rol === "admin")){
    console.log("Acceso total")
} else if(usuarioActivo === true){
    console.log("Acceso limitado")
}else{
    console.log("Acceso denegado")
}


