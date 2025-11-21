type Employee = {
  readonly id: number;
  name: string;
  salary: number;
  phone?: string;
};

let emp1: Employee = {
  id: 1,
  name: "Pubordee",
  salary: 50000,
  phone: "061-510-9493",
};

let emp2: Employee = {
  id: 2,
  name: "โจโจ้",
  salary: 80000,
  phone: "080-123-1212",
};

let emp3: Employee = {
  id: 3,
  name: "นัืท",
  salary: 60000,
};

console.log(emp1);
console.log(emp2);
console.log(emp3);
