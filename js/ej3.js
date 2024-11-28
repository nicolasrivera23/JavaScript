// preguntar al usuario los valores edad y VIP

let edad = 18;
let vip = true;

// chequeos de los datos

if(edad >= 18 && vip == true) {
  console.log("Tiene acceso al sector exclusivo");
} else if (edad >= 18 && vip == false ) {
  console.log("Tiene acceso al evento.");
} else {
  console.log("Lamentablemente no se puede ingresar");
}



