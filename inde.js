let precioTotal = 0;
//function suma para calcular precio total
const suma = (a, b) => a + b;

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
      this.cantidad = 0;
  }

  vender(cantida) {
    precioTotal = suma(precioTotal, cantida * this.precio);
    this.cantidad = this.cantidad + cantida;
  }
}

//Productos
const producto1 = new Producto("Lasagna de acelga", 10);
const producto2 = new Producto("Guiso de lentejas", 20);
const producto3 = new Producto("Malfatti de espinaca", 30);
const producto4 = new Producto("Fideos de zucchini y zanahoria", 40);
const producto5 = new Producto("Fideos de repollo", 50);
const producto6 = new Producto("Pan de carne relleno", 60);
const producto7 = new Producto("Rollito de cerdo c/pure de coliflor", 70);
const producto8 = new Producto("Pechuga rellena", 80);
const producto9 = new Producto("Tacos de pollo", 90);
const producto10 = new Producto("Empanadas de carne c/ masa de calabaza", 100);

/* console.log(precioTotal);
console.log(producto1);
producto1.vender(5);
console.log(precioTotal);
producto3.vender(1);

console.log(producto1);
console.log(precioTotal); */

alert(
  "Bienvenidos a la tienda de Que Rico Soli! \nElija sus productos y empiece a disfrutar!"
);
/* 
let eleccionProducto = parseInt(
  prompt(`Elija un producto:
    (1) ${producto1.nombre} 
    (2) ${producto2.nombre}
    (3) ${producto3.nombre}
    (4) ${producto4.nombre}
    (5) ${producto5.nombre}
    (6) ${producto6.nombre}
    (7) ${producto7.nombre}
    (8) ${producto8.nombre}
    (9) ${producto9.nombre}
    (10) ${producto10.nombre}
    (0) Finalizar compra.`)
);

if (eleccionProducto = 1) {
  cantidad = parseInt(prompt("Indique una cantidad de viandas."));
  producto1.vender(cantidad);
} else if (eleccionProducto = 2) {
  cantidad = parseInt(prompt("Indique una cantidad de viandas."));
  producto2.vender(cantidad);
} else if (eleccionProducto = 3) {
  cantidad = parseInt(prompt("Indique una cantidad de viandas."));
  producto3.vender(cantidad);
} else if (eleccionProducto = 4) {
  cantidad = parseInt(prompt("Indique una cantidad de viandas."));
  producto4.vender(cantidad);
} else if (eleccionProducto = 5) {
  cantidad = parseInt(prompt("Indique una cantidad de viandas."));
  producto5.vender(cantidad);
} else if (eleccionProducto = 6) {
  cantidad = parseInt(prompt("Indique una cantidad de viandas."));
  producto6.vender(cantidad);
} else if (eleccionProducto = 7) {
  cantidad = parseInt(prompt("Indique una cantidad de viandas."));
  producto7.vender(cantidad);
} else if (eleccionProducto = 8) {
  cantidad = parseInt(prompt("Indique una cantidad de viandas."));
  producto8.vender(cantidad);
} else if (eleccionProducto = 9) {
  cantidad = parseInt(prompt("Indique una cantidad de viandas."));
  producto9.vender(cantidad);
} else if (eleccionProducto = 10) {
  cantidad = parseInt(prompt("Indique una cantidad de viandas."));
  producto10.vender(cantidad);
} else {
  ("ingrese opcion válida");
}

let seguirComprando = prompt("¿Desea seguir comprando?").toLowerCase();
 */
do {
  let eleccionProducto = parseInt(
    prompt(`Elija un producto:
      (1) ${producto1.nombre} 
      (2) ${producto2.nombre}
      (3) ${producto3.nombre}
      (4) ${producto4.nombre}
      (5) ${producto5.nombre}
      (6) ${producto6.nombre}
      (7) ${producto7.nombre}
      (8) ${producto8.nombre}
      (9) ${producto9.nombre}
      (10) ${producto10.nombre}
      (0) Finalizar compra.`)
  );

  if ((eleccionProducto === 1)) {
    let cantidad = parseInt(prompt("Indique una cantidad de viandas."));
    producto1.vender(cantidad);
  } else if ((eleccionProducto === 2)) {
    let cantidad = parseInt(prompt("Indique una cantidad de viandas."));
    producto2.vender(cantidad);
  } else if ((eleccionProducto === 3)) {
    let cantidad = parseInt(prompt("Indique una cantidad de viandas."));
    producto3.vender(cantidad);
  } else if ((eleccionProducto === 4)) {
    let cantidad = parseInt(prompt("Indique una cantidad de viandas."));
    producto4.vender(cantidad);
  } else if ((eleccionProducto === 5)) {
    let cantidad = parseInt(prompt("Indique una cantidad de viandas."));
    producto5.vender(cantidad);
  } else if ((eleccionProducto === 6)) {
    let cantidad = parseInt(prompt("Indique una cantidad de viandas."));
    producto6.vender(cantidad);
  } else if ((eleccionProducto === 7)) {
    let cantidad = parseInt(prompt("Indique una cantidad de viandas."));
    producto7.vender(cantidad);
  } else if ((eleccionProducto === 8)) {
    let cantidad = parseInt(prompt("Indique una cantidad de viandas."));
    producto8.vender(cantidad);
  } else if ((eleccionProducto === 9)) {
    let cantidad = parseInt(prompt("Indique una cantidad de viandas."));
    producto9.vender(cantidad);
  } else if ((eleccionProducto === 10)) {
    let cantidad = parseInt(prompt("Indique una cantidad de viandas."));
    producto10.vender(cantidad);
  } else {
    ("ingrese opcion válida");
  }

  seguirComprando = prompt("¿Desea seguir comprando?").toLowerCase();
} while (seguirComprando === "si");

alert(
  `El total a pagar es de $ ${precioTotal}.\n¡Muchas Gracias por su compra!`
);
console.log(precioTotal); 
console.log(producto1.cantidad);
console.log(producto2.cantidad);
console.log(producto3.cantidad);
console.log(producto4.cantidad);
console.log(producto5.cantidad);
console.log(producto6.cantidad);
console.log(producto7.cantidad);
console.log(producto8.cantidad);
/* let seguirComprando = promt("¿Desea seguir comprando?").toLowerCase();

while (seguirComprando === si) {

  precio = suma(eleccionProducto, precio);
}
 */
