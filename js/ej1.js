//Obtener los dos valores a traves del prompt.
var primerNro = prompt ("Ingrese el primer número", 0);
var segundoNro = prompt ("Ingrese el segundo número", 0);

//se guardaron los numeros?
console.log(primerNro);
console.log(segundoNro);

//chequear tipos
console.info(typeof primerNro);
console.info(typeof segundoNro);

//convertir o parsear a entero
let n1 = parseInt(primerNro);
let n2 = parseInt(segundoNro);

//pedir a través del prompt un número para la comparación
var nroComparable = prompt ("Ingrese el nro a comparar", 0);
let n3 = parseInt(nroComparable);

let comparacion = (n1 + n2) > n3;
console.log("Es nro comparable es menor a la suma" , comparacion);

//operaciones aritméticas
//agregar multiplicación , división
document.write("Suma : " , n1 + n2 ,"Resta : " , n1 - n2);

