const person1 = {
  name: "pubordee",
  age: 20,
};

const person2: { name: string; age: number; address: string } = {
  name: "jojo",
  age: 30,
  address: "กรุงเทพมหานคร",
};

const position: { lat: number; long: number } = {
  lat: 30,
  long: 50,
};

// ****************************

// รับ Object

const showDetail = (data: { name: string; age: number }): void => {
  console.log(`ชื่อ = ${data.name} , อายุ = ${data.age}`);
};

showDetail(person1);

// return object

const randomPosition = (): { lat: number; long: number } => {
  return {
    lat: Math.random(),
    long: Math.random(),
  };
};

console.log(randomPosition());

// ********************************

const showDetail1 = (data: { name: string; age: number }): void => {
  console.log(`ชื่อ = ${data.name} , อายุ = ${data.age}`);
};

showDetail({
  name: "jojo",
  age: 30,
  address: "กรุงเทพมหานคร",
});
