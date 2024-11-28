//obtener o crear el listado de productos
let productos = [
  {
    "descripcion" : "Monitor 24 Full HD",
    "precio" : 43.99,
    "tieneDescuento" : false
  },
  {
    "descripcion" : "Teclado ergonómico",
    "precio" : 12.99,
    "tieneDescuento" : true
  },
  {
    "descripcion" : "Placa de Video",
    "precio" : 33.99,
    "tieneDescuento" : false
  }
];

//Validacion de datos
console.info("Validación de datos")
for(let i = 0; i < productos.length; i++) {
  if(productos[i].descripcion == "") {
    console.log("La descripción no puede estar vacía");
  }
  if(productos[i].precio < 1) {
    console.log("El precio no puede ser menor a 1 peso");
  }
}

//Mostrar todos los productos

for(let i = 0; i < productos.length; i++) {
  console.log(productos[i].descripcion);
}



//Mostrar todos los productos con descuento
function obtenerProductosDescuento(){
  
}
console.info("Productos con Descuento");
for(let i = 0; i < productos.length; i++) {
  if(productos[i].tieneDescuento == true) {
    console.log(productos[i].descripcion);
  }
}

//Mostrar todos los productos sin descuento
console.info("Productos sin Descuento");
for(let i = 0; i < productos.length; i++) {
  if(productos[i].tieneDescuento == false) {
    console.log(productos[i].descripcion);
  }
}

//Cantidad total de cada uno

let counterDiscount = 0; 
let counterNoDiscount = 0;
for(let i = 0; i < productos.length; i++) {
  if(productos[i].tieneDescuento == true) {
    counterDiscount++;
  } else {
    counterNoDiscount++;
  }
}
console.info("Total Stock ");
console.info(counterDiscount, " Producto/s en oferta");
console.info(counterNoDiscount, " Producto/s con precios habituales");


