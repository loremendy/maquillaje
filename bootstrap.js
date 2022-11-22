/*
	** Listas 
  
	Arreglo/lista -> [ ]
  Agregar algo a la lista, es con lista.push(elemento)
  Encontrar el índice de un elemento, es con lista.indexOf(elemento)
  Si tenemos el índice, podemos eliminar el elemento con: lista.splice(indice, 1)
  Si queremos el número de elementos de una lista es con lista.length
*/

/*
	** JSON 
  
  JSON-> { }

*/

/*
	Si queremos recorrer los elementos del lista de uno por uno, se hace con un for:
  for (var elemento of lista){
  	// Acá van a aparecer los elementos de a uno por uno
  }
*/

var carrito = [];
var productosValor = {
  "dia": 40000,
  "noche": 60000,
  "fantasia": 80000,
};

function agregar(producto) {
  // Cuando yo agregue el producto, el producto debería entrar al carrito
  carrito.push(producto);

  actualizarNumeroDeProductosEnElCarrito();
  calcularPrecio();
}

function eliminar(producto) {
  // Cuando yo retire un producto, el producto debe salir del carrito
  var indiceDelProducto = carrito.indexOf(producto);

  if (indiceDelProducto != -1) {
    carrito.splice(indiceDelProducto, 1);
  }

  actualizarNumeroDeProductosEnElCarrito();
  calcularPrecio();
}

function actualizarNumeroDeProductosEnElCarrito() {
  document.getElementById("carrito").innerHTML = carrito.length;
}

function calcularPrecio() {
  // Dígame el valor total de los productos seleccionados en el carrito
  var total = 0;
  for (var producto of carrito) {
    // precio del elemento -> productosValor[producto]
    // console.log(producto, productosValor[producto])
    total += productosValor[producto];
  }

  document.getElementById("total").innerHTML = total;

  // Enumerar los productos del carrito
  // Por cada uno de los productos, dígame el precio
  // Por cada precio, súmelo al total
}

function vaciarMiCarrito() {
  carrito = [];

  actualizarNumeroDeProductosEnElCarrito();
  calcularPrecio();
}

//document
//  .getElementById("vaciarCarrito")
// .addEventListener("click", vaciarMiCarrito);

// var -> crear variable
// if -> Quieres esto o quieres aquello? -> condicional
// function -> Crear funcion (acá se hacen cosas y sale algo)
// for -> Recorrer elementos de una lista

