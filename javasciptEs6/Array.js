const data1 = [100,200,300]
const data2 = [400,500]




const alldata = data1.concat(data2) // การต่อ Array
console.log(alldata);    






console.log(data1);


const result = data1.join("*") // แปลง Array เป็น String แล้วประกาศตัวขั่น
console.log(result);




const data = [10,20,30]

// push เอามาสมาชิกไปเพิ่มใน Array

data.push(500)
data.push(...[1000,2000])
console.log('Array push',data);


// pop เอาสมาชิกตัวท้ายสุดออกจาก Arrya

data.pop()
console.log('Array pop',data);


// shift เอาสมาชิกตัวที่อยู่ด้านหน้าออกไปจาก Array

data.shift()
console.log('Array shift',data);

// unshift เพิ่มสมาชิกตัวแรกเข้ามาใน Array

data.unshift(999)
console.log('Array unshift',data);

