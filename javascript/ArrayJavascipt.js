let color = [
  "แดง",
  "น้ำเงิน",
  "เหลือง",
  "ขาว",
  "น้ำตาล",
  "เขียว",
  "ส้ม",
  "ชมพู",
];

let fruits = ["มะม่วง", "แอปเปิ้ล", "กล้วย", "ทุเรียน"];

let x = color.join("|");

console.log(x);

// การรวม Array

let a = ["ผักกาด", "ผักคะน้า"];
let b = ["ส้ม", "ทุเรียน"];
let c = ['จาน','ชาม']

a = a.concat(b,c);
console.log(a);

// *************


// เรียงลำดับใน Array

// (จากน้อยไปมาก)

let points = [20,-5,-2,40,100,-500,150]

console.log(points);

points.sort(function(a,b){
    return a-b
})
console.log(points);

// (จากมากไปน้อย)

points.sort(function(a,b){
    return b-a
})

console.log(points);






// color.forEach((item)=>{
//     console.log(item);

// })

// for (let i = 0; i < color.length; i++) {
//   console.log("ลำดับที่ =", i, "มีค่า = ", color[i]);
// }

// let count = color.length;
// let result = color.sort(); //เรียงลำดับจาก พยัญชนะ
// color.push("เทา"); // เพิ่มจำนวนสมาชิกใน Arry

// console.log(fruits.sort());
// console.log(result);

// console.log("สมาชิกตัวสุดท้าย", color[color.length - 1]);

// console.log(count);
