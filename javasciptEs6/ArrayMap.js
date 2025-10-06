const numbers = [10, 20, 30, 40];
const result = numbers.map((e) => {
  const a = e * 2;
  return a;
});
console.log(result);
// *******************
const data = ["ฝนตก", "แดดร้อน", "ฝนฟ้าคะนอง", "อากาศดี", "หมอก"];
const resultdata = data.map((e, i) => {
  return `วันที่ ${i + 1},สภาพอากาศ = ${e}`;
});
console.log(resultdata);

//*************************** */

const datanew = [
  { day: "01/06/2564", weather: "แดดร้อน", temp: 27 },
  { day: "03/06/2564", weather: "ฝนตก", temp: 23 },
  { day: "04/06/2564", weather: "หมอก", temp: 18 },
];

const resultdatanew = datanew.map((e) => e.weather);

console.log(resultdatanew);
