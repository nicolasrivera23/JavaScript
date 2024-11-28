console.log("Hola JavaScript");

console.log(3+6);

console.log("La suma de 11 y 22 es : " , 11 + 22);
console.log("Texto equis " + "otro texto" + 44 + true);

//operador +=
var txt4 = "Bienvenidos ";
txt4 += "a Javascript";
console.log(txt4);

// Tipos de console 
console.info("info");
console.warn("Warning");
console.error("Error");

/* 
Comentario en bloque
o multilínea
*/

//Variables
var numero1 = 1; //entero
let saludo = "hola";//string o cadena de caracteres
const PI = 3.1416;//decimal
let esMayor = false;//boolean

numero1 = "Texto";


console.info(numero1);
console.info(saludo);
console.info(PI);

let numero2;

console.log(numero2);

//case sensitive
let numero = 3;
let Numero = 5;

console.info(numero);
console.info(Numero);

let primerNombre = "Nico";

var operacion = (3 + 3) * 2;
/*
No se puede reasignar un valor en una constante.
PI = 3.1417;
*/

//typeof

console.log("-----------------");
console.info(typeof primerNombre);
console.info(typeof numero);
console.info(typeof esMayor);

//Conversión Numérica
let nro1 = 5;
let palabra1 = "24233";
console.log(typeof palabra1);

let palabra2 = "3.1416";
console.log(typeof palabra2);

let enteroParseado = Number.parseInt(palabra1);
console.log(typeof enteroParseado);

let decimalParseado = Number.parseFloat(palabra2);
console.log(typeof decimalParseado);

console.log(parseInt("Numero 33"));

var nombre = prompt ("Ingrese su nombre", "");
document.write( "Hola " + nombre);

