"use strict";
// function (void)
Object.defineProperty(exports, "__esModule", { value: true });
const sayHi = () => {
    console.log("Hello TypeScript");
};
sayHi();
// function (Parameter)
const sayHello = (name) => {
    console.log(`Hello ${name}`);
};
sayHello("Pubordee Srisurach");
// function (return)
const getDiscount = () => {
    return 500;
};
const getAddress = () => {
    return "Rayong";
};
console.log(getAddress());
// function (parameter & return)
const checkNumber = (num) => {
    if (num % 2 === 0) {
        return "เลขคู่";
    }
    else {
        return "เลขคี่";
    }
};
const total = (a, b) => {
    return a + b;
};
console.log(total(100, 200));
console.log(checkNumber(3));
// Default Parameter
const showEmployee = (name, age, address = "กรุงเทพมหานคร") => {
    console.log(`ชื่อ  = ${name} , อายุ = ${age} , ที่อยู่ = ${address}`);
};
showEmployee("ก้อง", 30);
showEmployee("โจโจ้", 29, "ระยอง");
showEmployee("แบงค์", 35);
showEmployee("ลูกน้ำ", 27, "พะเยา");
