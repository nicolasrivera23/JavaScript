/*
let edad = 12;

//condicional if

if (edad >= 18) {
  console.log("Sos mayor de edad");
}
*/

//if - else
/*
if (edad >= 18) {
  console.log("Sos mayor de edad.");
} else {
  console.log("Sos menor de edad.");
} 

//if - elseif - else
if (edad >= 18) {
  console.log("Sos mayor de edad.");
} else if(edad >= 13) {
  console.log("Sos un adolescente");
} else {
  console.log("Sos un niño");
}

//operador ternario
let calificacion = nota < 6 ? "Suspendido" : "Aprobado";

//if múltiples
var nota = 10;
console.log("He realizado mi examen.");
// Condición

if (nota <= 5) {
  calificacion = "Insuficiente";
} else if (nota <= 6) {
    calificacion = "Suficiente";
} else if (nota < 8) {
    calificacion = "Bien";
} else {
    calificacion = "Sobresaliente";
}
console.log("He obtenido un", calificacion);


//if y &&
let altura = 0;
let edad = 0;
altura = parseFloat(prompt("Ingrese la altura"));
edad = parseInt(prompt("Ingrese la edad"));
if (altura > 1.30 && edad > 14) {
  console.log("Cumple con los requisitos");
} else{
console.log("No cumple con los requisitos");
}


// if - ||
let edad = 18;
let tieneTutor = false;

if( edad >= 18 || tieneTutor ) {
  console.log("Puede ingresar al evento");
} else {
  console.log("No puede ingresar al evento");
}


let nota = 3;
let calificacion = "";

switch(nota) {
  case 10 :
    calificacion = "Sobresaliente";
  break;
  case 9 :
  case 8 :
    calificacion = "Notable";
  break;
  case 7 :
  case 6 :
    calificacion = "Bien";
  break;
  case 5 :
    calificacion = "Suficiente";
    break;
  case 4 :
  case 3 : 
  case 2 :
  case 1 :
  case 0 :
    calificacion = "Insuficiente";
  break;
  default :
    calificacion = "Nota Errónea / Error en la calificación".
    break;
}
console.log("He obtenido un ", calificacion);


//
i = 0; // Inicialización de la variable contador
// Condición: Mientras la variable contador sea menor de 5
while (i < 5) {
  console.log("Valor de i:", i);
  i++; // Incrementamos el valor de i
}
console.log(i);
*/

//Bucle For
for (var i=1; i<=10; i++) {
  console.log(i);
}


