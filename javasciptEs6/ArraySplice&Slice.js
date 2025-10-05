const data = [10, 20, 30, 40, 50];
// Splice(ตำแหน่งที่จะลบ , จำนวนที่จะลบ , สมาชิกที่ต้องการแทรก)

// data.splice(1, 2, 999);
console.log("Array Splice", data);

// Slic(ตำแหน่งเริิ่มต้น,ตำแหน่งสุดท้าย-1)

const lastdata = data.slice(1, 3);
console.log("Array Slic", lastdata);
