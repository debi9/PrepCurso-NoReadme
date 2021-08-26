const producto_uno = new Producto(`fender`, 12000000, 1, "/media/fender.png");
const producto_dos = new Producto("gibson", 900000, 2);
const producto_tres = new Producto("Squire", 10000, 5);
const producto_cuatro = new Producto("Epiphone", 11000, 3);

const baseDeDatos = [
  producto_uno,
  producto_dos,
  producto_tres,
  producto_cuatro,
];
let acumulador = ` `;
for (let i = 0; i < baseDeDatos.length; i++) {
  acumulador += `<div class="card">
  <img src="${baseDeDatos[i].image}" widht="100"  height="100" />
  <h3>${baseDeDatos[i].title}</h3>
  <p>${baseDeDatos[i].price}</p>
  </div>`;
}
document.write(acumulador);
