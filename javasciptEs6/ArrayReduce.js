const data = [10, 20, 30, 40];

// reduce((ค่าที่ถูกประมวลผล,e)=>{},ค่าเริ่มต้น(value))

// const summ = data.reduce((value,e)=>e+value,0)
const summation = data.reduce((value, e) => {
  // console.log('ค่าvalue',value);

  const total = e + value;
  return total;
}, 0);

// console.log(summation);

// const cart = [
//   { name: "กระเป๋า", price: 500 },
//   { name: "หนังสือ", price: 900 },
//   { name: "กล้องถ่ายรูป", price: 5000 },
// ];

// const total =cart.reduce((value,e)=>value+e.price,0)

// console.log(total);

// const monthlySales = [12000, 15500, 9800, 22000, 18500, 14200];

// const result = monthlySales.reduce((value, e) => value + e, 0);
// console.log(result);

// const products = [
//   { name: "Laptop", category: "Electronics" },
//   { name: "T-shirt", category: "Apparel" },
//   { name: "Mouse", category: "Electronics" },
//   { name: "Jeans", category: "Apparel" },
//   { name: "Keyboard", category: "Electronics" },
//   { name: "Socks", category: "Apparel" },
// ];

// const groupedProducts = products.reduce((value, e) => {
//   const key = e.category;
//   console.log(key);

//   if (!value[key]) {
//     value[key] = [];
//   }

//   value[key].push(e);

//   return value;
// }, {});

// console.log(groupedProducts);

// const salesRecords = [
//   { item: "Coffee Mug", category: "Home", price: 150 },
//   { item: "Bluetooth Speaker", category: "Electronics", price: 1200 },
//   { item: "Throw Blanket", category: "Home", price: 850 },
//   { item: "USB Cable", category: "Electronics", price: 250 },
//   { item: "Notebook", category: "Stationery", price: 50 },
//   { item: "Desk Lamp", category: "Home", price: 900 },
// ];

// const totalsByCategory = salesRecords.reduce((value, e) => {
//   const key = e.category;
//   console.log(key);

//   if(!value[key]){
//     value[key] = 0;
//   }

//   value[key] = value[key] + e.price

//   return value
// }, {});

// console.log(totalsByCategory);



const inventory = [
  { id: 101, name: 'T-shirt Black', status: 'In Stock' },
  { id: 102, name: 'Jeans Blue', status: 'In Stock' },
  { id: 103, name: 'Sweater Red', status: 'Out of Stock' },
  { id: 104, name: 'Socks Grey', status: 'In Stock' },
  { id: 105, name: 'Hoodie Blue', status: 'Out of Stock' },
  { id: 106, name: 'Cap White', status: 'In Stock' }
];

const stockCounts = inventory.reduce((accumulator, item) => {
  // 1. ดึงคีย์: ชื่อสถานะ (status)
  const key = item.status; 
  
  // 2. ตรวจสอบและกำหนดค่าเริ่มต้น (Initialization)
  // 💡 ตรรกะควรเป็น: ถ้าคีย์นี้ 'ยังไม่เคยมี' (ใช้ !) ให้กำหนดค่าเริ่มต้น
  if (!accumulator[key]) {
    // กำหนดให้ยอดนับเริ่มต้นของสถานะนั้นเป็น 0
    accumulator[key] = 0; 
  }
  
  // 3. นับเพิ่ม (Increment)
  // ไม่ว่าจะเคยมีคีย์นี้หรือไม่ (ถ้ามีก็ใช้ค่าเดิมมาบวกต่อ) ให้บวกเพิ่ม 1 เสมอ
  accumulator[key] = accumulator[key] + 1;
  
  // 4. คืนค่าตัวสะสม
  return accumulator;
  
}, {}); // ค่าเริ่มต้นคือ Object เปล่า {}

console.log(stockCounts);
