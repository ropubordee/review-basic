const colors : string[] = ['แดง','เขียว','น้ำเงิน']

const [red,green,blue] = colors

 console.log(red);
 console.log(green);
 console.log(blue);

 // object

 const person : {fanme : string,age : number , address : string} ={
    fanme : 'pubordee',
    age : 30,
    address : 'มหาสารคาม'
 }
 
 const {fanme, age , address} = person

 console.log(fanme);
 