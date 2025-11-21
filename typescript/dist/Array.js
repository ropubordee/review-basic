"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = ['ก้อง', 'โจโจ้'];
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}
users.forEach(item => {
    console.log(item);
});
console.log(users.length);
const ages = [18, 20, 25];
const employees = [];
employees.push({ name: 'pubordee', salary: 50000, department: 'โปรแกรมเมอร์' });
employees.push({ name: 'โจโจ้', salary: 80000, });
employees.push({ name: 'นัท', salary: 100000, department: 'ฝ่ายขาย' });
for (let person of employees) {
    console.log(person);
}
console.log(employees);
const section = ['บัญชี', 'การเงิน'];
const departments = ['โปรแกรมเมอร์', 'การตลาด', 'กราฟิก'];
departments.push(...section);
console.log(departments);
const total = (...numbers) => {
    return numbers.reduce((result, value) => {
        return result + value;
    }, 0);
};
console.log(total(100, 200));
