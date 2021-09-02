const producto_uno = new Producto("fender", 12000000, 1, "/media/fender.png");
const producto_dos = new Producto("gibson", 900000, 2, "/media/gibson.jpeg");
const producto_tres = new Producto("Squire", 10000, 5, "/media/squire.png");
const producto_cuatro = new Producto("Epiphone", 11000, 3, "/media/epi.jpeg");

const baseDeDatos = [
  producto_uno,
  producto_dos,
  producto_tres,
  producto_cuatro,
];
const carrito = [];

// creando las cards

let acumulador = ``;
baseDeDatos.forEach((producto) => {
  acumulador += ` <div class="col mb-5" id="${producto.title}">
  <div class="card h-100">
    <!-- Product image-->
    <img class="card-img-top"   src=${producto.image} alt="..." />
    <!-- Product details-->
    <div class="card-body p-4">
      <div class="text-center">
        <!-- Product name-->
        <h5 class="fw-bolder">${producto.title}</h5>
        <!-- Product price-->
        ${producto.price}
      </div>  
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div class="text-center">
        <a class="btn btn-outline-dark mt-auto" href="#" onclick"agregarAlCarrito"('${producto.title}')
          >Agreagar al carrito</a>
      </div>
    </div>
  </div>
</div>`;
});

document.getElementById("productos").innerHTML = acumulador;

function agregarAlCarrito(title) {
  carrito.push(title);
  console.log(title);
  document.getElementById("contador-carrito").innerHTML = carrito.length;

  // ESTO SIRVE PARA TRAER TODOS LOS H1
  // const todosLosH1 = document.getElementsByTagName("H1");
  // console.log(todosLosH1[0]);
}

//*****************PARA REMOVER DEL CARRITO!!!!******************************** */

// {/* <div class="col mb-5" id="${producto.title}">
// <div class="card h-100">
//   <!-- Product image-->
//   <img class="card-img-top"   src=${producto.image} alt="..." />
//   <!-- Product details-->
//   <div class="card-body p-4">
//     <div class="text-center">
//       <!-- Product name-->
//       <h5 class="fw-bolder">${producto.title}</h5>
//       <!-- Product price-->
//       ${producto.price}
//     </div>
//   </div>
//   <!-- Product actions-->
//   <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
//     <div class="text-center">
//       <a class="btn btn-outline-dark mt-auto" href="#" onclick"agregarAlCarrito"('${producto.title}')
//         >Agreagar al carrito</a>
//         <button onclick="borrarDelCarrito('${producto.title}')">eliminar del carrito</button> ESTO
//     </div>
//   </div>
// </div>
// </div>;
// });

// document.getElementById("productos").innerHTML = acumulador;

// y esto
// function borrarDelCarrito(title){
// const productoEncontrado = baseDeDatos.find(producto => producto.title === title)
// const card = document.getElementById(title);
// card.parentNode.removeChild(card);
// } */}
