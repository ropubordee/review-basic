const summation = (...numberArr) => {
  let total = 0;
  for (let number of numberArr) total = total + number;
  return total;
};

console.log(summation(500, 1000, 800, 500));

// Default Parmeter

const getDataCustomer = (customerName, customerAddress='กรุงเทพมหานตร') => {
  const address = `ชื่อลูกค้า : ${customerName}
  ที่อยู่ : ${customerAddress}`;
  return address;
};

console.log(getDataCustomer("pubordee", "กรุงเทพ"));
console.log(getDataCustomer('ดิว'))
