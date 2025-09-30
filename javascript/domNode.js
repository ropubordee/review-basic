// const textAll = document.querySelectorAll("p");
// let message = textAll[1].innerHTML;
// console.log(message);

// เพิ่ม แท็ก html

const menu = document.getElementById("menu");
let count = 1;
const additem = () => {
  const item = document.createElement("li"); // ส้ารง li

  item.innerText = "item" + count++;

  menu.appendChild(item);
};

//************** */

// การลบ แท็ก html

const A = document.getElementById("A");

const deleteItem = () => {
  const itwmtwo = document.getElementById("item-3");

  A.removeChild(itwmtwo);
};

// *********************

// การแทนที่ แท็ก html ด้วย

const replaItem = () => {
  const itemB = document.getElementById("item-2");

  const newitem = document.createElement("li");
  newitem.innerText = "X";

  A.replaceChild(newitem, itemB);
};
// ******************
