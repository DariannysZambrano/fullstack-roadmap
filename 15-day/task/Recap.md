
1. Sintaxis de JavaScript

La sintaxis de JavaScript son las reglas que dictan cómo se debe escribir el código para que sea válido y el navegador o entorno de ejecución (como Node.js) pueda entenderlo.

Declaración de variables: Se utilizan palabras clave como let o const para crear "contenedores" donde guardar información.
Ejemplo: let edad = 30;
Cálculo de valores: Se usan operadores matemáticos para realizar operaciones.
Ejemplo: let suma = 5 + 6;
Comentarios: Son notas que se añaden al código para explicarlo, pero que JavaScript ignora completamente durante la ejecución. Son muy útiles para la legibilidad y el mantenimiento del código.

2. Valores en JS

JavaScript maneja dos tipos principales de valores:

Literales (Valores Fijos): Son datos que se escriben directamente en el código.
Números: Pueden ser enteros o decimales.
Ejemplo: 10, 3.14
Cadenas de texto (Strings): Son secuencias de caracteres que siempre van entre comillas dobles (") o simples (').
Ejemplo: "Hola Mundo", 'JavaScript'
Variables (Valores Variables): Son contenedores que almacenan datos y cuyo contenido puede cambiar durante la ejecución del programa.

4.(Keywords)

Las palabras clave son términos reservados en JavaScript que tienen un significado especial y se utilizan para realizar acciones específicas. No se pueden usar como nombres de variables.

let: Declara una variable con ámbito de bloque (explicado más adelante). Su valor puede ser reasignado.
const: Declara una constante con ámbito de bloque. Su valor no puede ser reasignado después de la inicialización.
var: Declara una variable con ámbito global o de función (no se recomienda su uso en código moderno).
Nota: Las palabras clave de JavaScript son sensibles a mayúsculas y minúsculas. let es diferente de LET o Let.

5. Variables en JavaScript

Las variables son fundamentales para almacenar y manipular datos. Son como cajas con etiquetas donde guardamos información.

Identificación: Cada variable debe tener un nombre único (un identificador) para poder referirse a ella.
Declaración: Se crean usando let o const.

Asignación: Se le da un valor a una variable usando el operador de asignación (=).

Declaración y Asignación: Lo más común es declarar y asignar un valor en la misma línea.

6. Identificadores de JavaScript

Un identificador es el nombre que le das a una variable, función o cualquier otro elemento en JavaScript. Hay reglas estrictas para nombrarlos:

Deben comenzar con una letra (a-z, A-Z), un guion bajo (_) o un signo de dólar ($).
Pueden contener dígitos (0-9) después del primer carácter.
No pueden ser una palabra clave reservada de JavaScript (como let, const, if).
Son sensibles a mayúsculas y minúsculas (miVariable es diferente de mivariable).

Convenciones:
Guion bajo (_): primer_nombre. A veces se usa para variables "privadas" (aunque JavaScript no tiene un concepto estricto de privacidad).
Signo de dólar ($): $miVariable. A menudo se usa en librerías JavaScript como alias para funciones principales.
Camel Case (más común):
Lower Camel Case: primerNombre, nombreCompleto. Es la convención más utilizada en JavaScript para nombres de variables y funciones.
Upper Camel Case (Pascal Case): PrimerNombre, NombreCompleto. Se usa comúnmente para nombres de clases o constructores.

7. Operadores de JavaScript

Los operadores son símbolos que realizan operaciones sobre valores y variables.

Operadores de asignación (=): Asignan un valor a una variable.
Ejemplo: let x = 10;
Operadores aritméticos (+, -, *, /, %): Realizan cálculos matemáticos.
Ejemplo: let resultado = 5 * 10;

8. Expresiones de JavaScript

Una expresión es una combinación de valores, variables y operadores evalúa para producir un único valor, como cuando uno hace un calculo

9. Sentencias y Programas de JavaScript

Sentencia (Statement): Un programa de JavaScript es una secuencia de muchas sentencias.
Ejemplo: let x = 5; es una sentencia.
Programa: Una lista de instrucciones que la computadora debe ejecutar. Las sentencias se ejecutan una por una, en el orden en que están escritas.
Bloques de Código: Las sentencias se pueden agrupar en bloques usando llaves {}. Esto es común en funciones, bucles o condicionales, donde un conjunto de sentencias se ejecutan juntas.
Ejemplo:
function saludar() {
console.log("Hola");  Sentencia 1
console.log("¿Cómo estás?"); Sentencia 2
}

10. Comentarios en JavaScript

Los comentarios son esenciales para documentar el código y hacerlo comprensible para otros desarrolladores, JavaScript los ignora.

Comentarios de una sola línea: Comienzan con Todo lo que sigue hasta el final de la línea es un comentario.
Ejemplo: let edad = 30; Declara la edad del usuario
Comentarios de múltiples líneas (Bloque): Comienzan con /* y terminan con */. Todo lo que esté entre ellos es un comentario.
Ejemplo:
/*
Este es un comentario
que abarca varias líneas
y explica una sección de código.
*/
let nombre = "Ana";

11. Ciclo de Vida y Declaración de Variables (var, let, const)

El ciclo de vida de una variable incluye su declaración, asignación, posible reasignación y, en algunos casos, redeclaración. La forma en que se declara una variable (var, let, const) afecta significativamente su comportamiento, especialmente en cuanto a su ámbito (scope) y si puede ser redeclarada o reasignada.

11. var (No Recomendado en Código Moderno)

Ámbito (Scope):
Global: Si se declara fuera de cualquier función, es accesible desde cualquier parte del programa.
De Función: Si se declara dentro de una función, solo es accesible dentro de esa función.
NO tiene ámbito de bloque: Esto significa que si declaras una variable var dentro de un bloque de código (como un if o un for), sigue siendo accesible fuera de ese bloque. Esto puede llevar a errores inesperados.
Ejemplo:
var x = 10;
if (true) {
var x = 20; Redeclara la misma variable 'x' global
}
console.log(x);  Muestra 20
Redeclaración: Se puede redeclarar la misma variable var múltiples veces en el mismo ámbito sin error. Esto es una fuente común de errores, ya que puedes sobrescribir accidentalmente una variable existente.
Ejemplo:
var nombre = "Juan";
var nombre = "Pedro"; Válido, 'nombre' ahora es "Pedro"
Reasignación: Su valor puede ser cambiado en cualquier momento.

11. let (Recomendado para Variables Modificables)

Ámbito (Scope):
De Bloque: Las variables declaradas con let solo son accesibles dentro del bloque de código {} donde fueron definidas. Esto es una mejora importante sobre var, ya que ayuda a evitar conflictos de nombres y hace el código más predecible.
Ejemplo:
let x = 10;
if (true) {
let x = 20; Declara una nueva variable 'x' solo para este bloque
console.log(x); Muestra 20
}
console.log(x);  Muestra 10 (la 'x' original)
Redeclaración: No se puede redeclarar una variable let en el mismo ámbito. Intentarlo causará un error.
Ejemplo:
let nombre = "Juan";
let nombre = "Pedro";  No se puede redeclarar 'nombre'
Sin embargo, sí se puede redeclarar una variable let en un ámbito diferente (dentro de otro bloque).
Reasignación: Su valor puede ser cambiado en cualquier momento.
Ejemplo:
let contador = 0;
contador = 1;Válido


11. const (Recomendado para Constantes)

Ámbito (Scope):
De Bloque: Al igual que let, las constantes declaradas con const solo son accesibles dentro del bloque de código {} donde fueron definidas.
Redeclaración: No se puede redeclarar una constante const en el mismo ámbito.
Reasignación:Su valor NO puede ser reasignado después de la inicialización! Debes asignarle un valor en el momento de la declaración.
Ejemplo:
const PI = 3.14159;
PI = 3.14;  No se puede reasignar una constante

Objetos y Arrays con const: Es importante  que const no hace que el contenido de un objeto o array sea inmutable, sino que la referencia a ese objeto o array es constante. Puedo cambiar las propiedades de un objeto o los elementos de un array declarado con const, pero no puedes reasignar la variable const a un objeto o array completamente nuevo.
Ejemplo:
const coche = { tipo: "Fiat", modelo: "500" };
coche.color = "rojo";  Válido: cambia una propiedad del objeto
coche = { tipo: "Volvo" }; No se puede reasignar el objeto completo


11. Declaración Automática (Sin Keyword - No Recomendado)

Si asignas un valor a una variable sin declararla previamente con var, let o const, JavaScript la declarará automáticamente como una variable global. Esto es una mala práctica porque puede llevar a la creación accidental de variables globales y a conflictos.

Ejemplo:
x = 5;'x' se convierte en una variable global

Recomendación General:
Usa const siempre que el valor de la variable no deba cambiar.
Usa let cuando sepas que el valor de la variable necesitará ser modificado.
Evita var en código moderno debido a sus problemas de ámbito y redeclaración.

12. Tipos de Datos en JavaScript

JavaScript es un lenguaje de tipado dinámico, lo que significa que no necesitas especificar el tipo de dato de una variable al declararla; JavaScript lo infiere en tiempo de ejecución. JavaScript tiene 8 tipos de datos principales:

12. Datos Primitivos (Valores Simples)

Son los tipos de datos más básicos y representan un único valor.

String (Cadena de Texto): Representa texto. Se escribe entre comillas simples o dobles.
Ejemplo: "Hola", 'Mundo'

Number (Número): Representa números enteros o decimales.
Ejemplo: 10, 3.14, 123e5 (notación exponencial)

BigInt: Representa números enteros muy grandes que no pueden ser representados con el tipo Number. Se añade una n al final del número.
Ejemplo: 1234567890123456789012345n

Boolean (Booleano): Representa un valor lógico, que puede ser true (verdadero) o false (falso). Son fundamentales para las decisiones en la programación.
Ejemplo: let esMayor = true;

Undefined (Indefinido): Indica que una variable ha sido declarada pero aún no se le ha asignado un valor. También es el valor por defecto de las propiedades de objetos que no existen.

Ejemplo: let miVariable;  miVariable es undefined
Null (Nulo): Representa la ausencia intencional de cualquier valor de objeto. Es un valor que se asigna explícitamente para indicar "sin valor".
Ejemplo: let objetoVacio = null;

Symbol (Símbolo): Un tipo de dato primitivo introducido en ES6 que representa un identificador único e inmutable. Se usa a menudo para claves de propiedades de objetos que no deben colisionar.
Ejemplo: const id = Symbol('descripcion');

12. Datos No Primitivos (Objetos)

Representan colecciones de datos más complejos.

Object (Objeto): Es el tipo de dato más complejo. Un objeto es una colección de propiedades, donde cada propiedad tiene un nombre (clave) y un valor.
Ejemplo: const persona = { nombre: "Juan", edad: 30 };
Array (Arreglo/Lista): Es un tipo especial de objeto que almacena una colección ordenada de elementos. Los elementos se acceden por un índice numérico.
Ejemplo: const frutas = ["Manzana", "Pera", "Uva"];
Date (Fecha): Un objeto para trabajar con fechas y horas.
Ejemplo: const hoy = new Date();

13. Operador de Asignación vs. Operador de Igualdad
Operador de Asignación (=): Se usa para asignar un valor a una variable.
Ejemplo: let x = 5; (asigna el valor 5 a x)
Operador de Igualdad (== o ===): Se usa para comparar si dos valores son iguales.
== (igualdad débil): Compara valores después de intentar convertirlos al mismo tipo.
=== (igualdad estricta): Compara valores y tipos sin ninguna conversión. Es el más recomendado.
Ejemplo: if (x == 5) (comprueba si x es igual a 5)

14. Aritmética en JavaScript

Ejemplo: let resultado = 5 + 2 + 3;
Concatenación de Cadenas: El operador + también se usa para unir cadenas de texto (concatenar).
Ejemplo: let nombreCompleto = "John" + " " + "Doe";
Cuidado con Números y Cadenas: Si intentas sumar un número y una cadena, JavaScript convertirá el número a cadena y realizará una concatenación.
Ejemplo: "5" + 2 + 3 resultará en "523"
Ejemplo: 2 + 3 + "5" resultará en "55" (primero suma los números, luego concatena)