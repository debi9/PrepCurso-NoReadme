function Producto(title, price, stock, image) {
  this.title = title;
  this.price = price;
  this.stock = stock;
  this.image = image;
  console.log(this);
}
const producto = new Producto("fender", 1.2, 1);
