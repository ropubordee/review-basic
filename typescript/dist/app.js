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
