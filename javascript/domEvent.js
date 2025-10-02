// const welcome = ()=>{
//     alert('ยินดีต้อนรับเข้าสู่หน้าระบบของเรา')
// }

const hightlight = (item) => {
  item.style.background = "yellow";
};

const unhightlight = (item) => {
  item.style.background = "black";
};

const getMenu = () => {
  const menu = document.getElementById("menu");
  const display = document.getElementById("display");
  console.log(menu.value);

  display.innerText = menu.value;
};

const hightlightMenu = (item) => {
  item.style.background = "yellow";
};

const unhightlightMenu = (item) => {
  item.style.background = "red";
};
