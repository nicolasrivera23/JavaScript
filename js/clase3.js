//Funciones

//Bucle tabla del 5
/*
for (i = 1; i <= 10; i++) {
  console.log("5 x", i, "=", 5 * i)
}
*/

//Declaración 
function tablaDelCinco() {
  for (i = 1; i <= 10; i++){
    console.log("5 x", i, "=", 5 * i)
  }
}
//Ejecución
//tablaDelCinco();

function elevarCuadrado(numero){
  return numero**2;
}

function sumar(nro1, nro2) {
  console.info("La suma es de : " , nro1 + nro2 );
}

sumar(3, 6);

function tablaMultiplicar(hasta) {
  for (var i = 1; i <= hasta; i++)
    console.log("1 x", i, "=", 1 * i);
}

tablaMultiplicar(4);

function saludarDos(miNombre) {
  console.log("Hola", miNombre);
}

saludarDos("Susana");

//let nombre = prompt("Ingrese su nombre");

//saludarDos(nombre);

function tablaMultiplicar(tabla, hasta) {
  for (var i = 1; i <= hasta; i++)
    console.log(tabla + " x " + i + " = ", tabla * i);
}

tablaMultiplicar(5, 11);
/*
function mayoriaEdad(miApellido, miNombre, miEdad) {
  console.log("Apellido y nombre: " + miApellido + ", " + miNombre);
  if (miEdad >= 18) {
    console.log("Es mayor de edad " + "(" + miEdad + ")")}
  else {
    console.log("No es mayor de edad " + "(" + miEdad + ")")}
}

mayoriaEdad("Messi", "Leonel", 19);

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let edad = prompt("Ingrese su edad");

console.info(typeof edad);

mayoriaEdad(nombre, apellido, edad);
*/
//Parámetros predeterminados
function multiplicar(a, b = 1) {
  return a * b;
}

console.info(multiplicar(5 , 2));



