document.write("Pubordee.com");
document.write("<p>Javascript เบี้องต้น</p>");

// alert("สวัสดีครับ")
console.log("Hello JavaScript");
// console.error('เจอไวรัส');
// console.warn("เจอผิดพลาด")

// แปลงค่าเลข

// let age = "20";

// console.log(age);
// console.log(typeof age);
//

// Array

// let number = [1, 2, 3, 4, 5, 6];
// number[1] = 200;
// console.log(number);
// console.log("ตัวแรก = ", number[0]);

//

// + - x %

// console.log('ผลบวก =',20+10);
// console.log('ผลลบ = ', 20-10);
// console.log('ผลคูณ = ',20*10);
// console.log('ผลหาร =', 20/10);
// console.log('ผลเศษ = ', 20%10)
// console.log('ผลยกกำลัง = ',20**2);

// && , ||, !

// let score = 70

// console.log(score >=70 && score<=80)

//

// if

// age = 10

// if(age == 15){
//     console.log('คำนำหน้าเป็นนาย/นางสาว');

// }
//

// function

const plusNumber = (x) => {
  console.log("ค่าที่ส่งมา = ", x);
};
const fullName = (fname, lname, city = "กรุงเทพมหานคร") => {
  console.log("ชื่อจริง = ", fname, "นามสกุล = ", lname, "ที่อยู่ = ", city);
};
// const summation = (x, y) => {
//   let total = x + y;
//   console.log(`ผลรวม = ${total}`);
// };

const getComputerIP = () => {
  return "127.0.0.1";
};

const getNumber = () => {
  return 100 * 100;
};
const getMyaddress = () => {
  let city = "ระยอง";
  return city;
};

const setSalary = (salary) => {
  let bonus = 1000;
  return salary + bonus;
};

const summation = (x, y) => {
  return x + y;
};

const getName = (name, city) => {
  return name + " " + city;
};

fullName('pubordee','srisurach', 'มหาสารคาม')

console.log(getName("ใจดี", "ระยอง"));



let sum = summation(50, 100);
console.log(`ผลรวมการบวกเลข =  ${sum}`);

let total = setSalary(15000);
console.log(`เงืนเดือน+โบนัส = ${total}`);


let a = 100;


console.log(a);
