"use strict";
// any & unknown
Object.defineProperty(exports, "__esModule", { value: true });
const formatNumber = (num) => {
    return num.toFixed(2);
};
let money = 50.12345;
if (typeof money === "number") {
    console.log(formatNumber(money));
}
let username;
username = "pubordee";
console.log(username.toUpperCase());
console.log(username.toUpperCase());
let amount = 50;
let result;
if (amount % 2 == 0) {
    result = 'เลขคู่';
}
else {
    result = 'เลขคี่';
}
result = (amount % 2 == 0) ? 'เลขคู่' : 'เลขคี่';
console.log(`ผลลัพธ์ = ${result}`);
