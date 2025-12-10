// ENUNCIADO:
// Tienes una lista de estudiantes con sus calificaciones.
// Tu tarea es:
// 1. Recorrer el array de estudiantes.
// 2. Si la calificación (grade) es mayor o igual a 60, el estudiante aprueba.
// 3. Si es menor a 60, reprueba.
// 4. Imprime un mensaje para cada estudiante diciendo si aprobó o no.
// */

const students = [
         { name: "Ana", grade: 85 },
         { name: "Juan", grade: 45 },
         { name: "Maria", grade: 60 },
         { name: "Pedro", grade: 30 }

  ];

// Escribe tu código aquí abajo:

function calification(students){
    for (let index = 0; index < students.length; index++) {
        if(students[index].grade >60){
            console.log( students[index].name + " " + "APROBADO")
        }else{
            console.log( students[index].name + " " + "REPROBADO, ESTUDIE")
        }
    } 
}

calification(students);