// ค้นหาข้อมูล ใน Array

// indexof => ได้ตำแหน่ง Index
// find => จะได้ข้อมูลที่ค้นเจอ ถ้าไม่เจอจะเป็น undefined

const colors = ["แดง", "เขียว", "น้ำเงิน", "ม่วง", "ขาว"];
// const index = colors.indexOf("แดง");
const search = colors.find((e) => e === "เหลือง");
console.log(search);
