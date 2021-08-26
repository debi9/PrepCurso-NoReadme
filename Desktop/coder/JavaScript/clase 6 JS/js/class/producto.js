function Producto(fender, price, stock, image) {
  this.title = fender;
  this.price = price;
  this.stock = stock;
  this.image = image;
  console.log(this);
}
const producto = new Producto(`fender`, 1.2, 1);
