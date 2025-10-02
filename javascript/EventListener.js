// อ้างอิง
const menu = document.getElementById("menu");
const display = document.getElementById("display");
const btn = document.getElementById("btn");
// event

const getMeun = () => {
  console.log(menu.value);
  display.innerText = menu.value;
};

const showWelcome = () => {
  alert("ยินดีต้อนรับเข้าสู่หน้าเว็บ");
};
menu.addEventListener("change", getMeun);
btn.addEventListener("click", showWelcome);
