let product = {
  name: "เมาส์",
  price: 1500,
  color: "black",
  category: "computer",
  size: "M",
  displayProduct: function () {
    return (
      "ชื่อสินค้า = ",
      this.name + " ราคา = " + this.price + " หมวดหมู่ = " + this.category
    );
  },
  disCount: function () {
    return this.price - 1000;
  },
  getColor:function(){
    return this.color
  }
};

//เรียกใช้ เมธอด
document.write(product.displayProduct());
document.write(`ลดแล้วเหลือ = ${product.disCount()}`);
console.log(product.getColor());

let item = ["เมาส์", 1500, "black", "computer", "M"];

console.log("ชื่อสินค้า = ", product.name); // Object
console.log("ชื่อสินค้า = ", item[0]); // Array
