// any & unknown

const formatNumber = (num: number) => {
  return num.toFixed(2);
};

let money: unknown = 50.12345;
if (typeof money === "number") {
  console.log(formatNumber(money));
}

let username: unknown;
username = "pubordee";
console.log((username as string).toUpperCase());
console.log((<string>username).toUpperCase());

let amount : number  = 50
let result : string

if(amount %2 ==0){
    result ='เลขคู่'
}else{
    result='เลขคี่'
}

result = (amount %2 ==0) ? 'เลขคู่' : 'เลขคี่'

console.log(`ผลลัพธ์ = ${result}`);


