// any & unknown

const formatNumber = (num: number) => {
  return num.toFixed(2);
};

let money: unknown = 50.12345;
if (typeof money === "number") {
  console.log(formatNumber(money));
}
