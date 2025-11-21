"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person1 = {
    name: "pubordee",
    age: 20,
};
const person2 = {
    name: "jojo",
    age: 30,
    address: "กรุงเทพมหานคร",
};
const position = {
    lat: 30,
    long: 50,
};
// ****************************
// รับ Object
const showDetail = (data) => {
    console.log(`ชื่อ = ${data.name} , อายุ = ${data.age}`);
};
showDetail(person1);
// return object
const randomPosition = () => {
    return {
        lat: Math.random(),
        long: Math.random(),
    };
};
console.log(randomPosition());
// ********************************
const showDetail1 = (data) => {
    console.log(`ชื่อ = ${data.name} , อายุ = ${data.age}`);
};
showDetail({
    name: "jojo",
    age: 30,
    address: "กรุงเทพมหานคร",
});
