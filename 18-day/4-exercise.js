// Iniciales de Nombre
// Crea una función que reciba un nombre completo (nombre y apellido) y devuelva solo las iniciales en mayúsculas separadas por un punto.

// Ejemplo: iniciales("juan perez") -> "J.P"
// Pista: Puedes acceder al primer carácter de un string como si fuera un arreglo (índice 0) o usar .charAt(0).

function getInitials(Name, lastName) {
  //     let name2 = Name.charAt(0).toUpperCase();
  //     let lastName2 = lastName.charAt(0).toUpperCase();
  //     console.log(name2 + "." + lastName2)

  console.log(
    Name.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase()
  );
}

getInitials("dary", "lulu99");
