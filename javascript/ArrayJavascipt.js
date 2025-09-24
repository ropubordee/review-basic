let color = ["แดง", "น้ำเงิน", "เหลือง", "ขาว",'น้ำตาล','เขียว','ส้ม','ชมพู'];

let fruits = ["มะม่วง", "แอปเปิ้ล", "กล้วย", "ทุเรียน"];


for(let i = 0; i<color.length; i++){
    console.log('ลำดับที่ =', i ,'มีค่า = ',color[i]);
    
}


let count = color.length;
let result = color.sort(); //เรียงลำดับจาก พยัญชนะ 
 color.push('เทา') // เพิ่มจำนวนสมาชิกใน Arry

console.log(fruits.sort());
console.log(result);

console.log("สมาชิกตัวสุดท้าย", color[color.length-1]);

console.log(count);
