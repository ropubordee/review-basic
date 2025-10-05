const data = [10, 20, 30, 40, 50];

for (let index = 0; index < data.length; index++) {
  if (data[index] >= 30) break;
  console.log(`For Loop ลำดับที่ ${index} = ${data[index]}`);
}
let sum = 0;
data.forEach((e) => {
  sum = sum + e;
  console.log(`ผลรวม = ${sum}`);
  
  console.log(`For Each สมาชิกใน Array Data = ${e}`);
});



for(const element of data){
    if(element >=30) break
    console.log(`For of Array Data = ${element}`);
    
}