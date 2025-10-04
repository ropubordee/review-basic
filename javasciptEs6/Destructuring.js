//Array
const colors = ["เขียว", "แดง", "เหลือง"];

const [green, , yellow] = colors;

console.log(green);

console.log(yellow);

// Object

const product = {
  productName: "คอมพิวเตอร์",
  price: 30000,
  stock: 10,
};

// const productName = product.productName
// const price = product.price
// const stock = product.stock

// const { productName: n, price: p, stock: s } = product;
const { productName, price, stock } = product;

console.log(productName);
console.log(price);
console.log(stock);
