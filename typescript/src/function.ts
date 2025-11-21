// function (void)

const sayHi = (): void => {
  console.log("Hello TypeScript");
};

sayHi();

// function (Parameter)

const sayHello = (name: string): void => {
  console.log(`Hello ${name}`);
};
sayHello("Pubordee Srisurach");

// function (return)

const getDiscount = (): number => {
  return 500;
};

const getAddress = (): string => {
  return "Rayong";
};

console.log(getAddress());

// function (parameter & return)

const checkNumber = (num: number): string => {
  if (num % 2 === 0) {
    return "เลขคู่";
  } else {
    return "เลขคี่";
  }
};

const total = (a: number, b: number): number => {
  return a + b;
};
console.log(total(100, 200));

console.log(checkNumber(3));

// Default Parameter

const showEmployee = (
  name: string,
  age: number,
  address: string = "กรุงเทพมหานคร"
): void => {
  console.log(`ชื่อ  = ${name} , อายุ = ${age} , ที่อยู่ = ${address}`);
};

showEmployee("ก้อง", 30);
showEmployee("โจโจ้", 29, "ระยอง");
showEmployee("แบงค์", 35);
showEmployee("ลูกน้ำ", 27, "พะเยา");





