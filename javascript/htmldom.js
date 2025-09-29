const title = document.getElementById("title");
const content = document.querySelector(".content"); //อ้างอิงผ่าน classs
const allEl = document.querySelectorAll("p");
const d = document.querySelector("#demo"); // อ้างอิงผ่าน id

const box = document.querySelector('.box')
const displaytext = () => {
  title.style.color = "red"; // เปลี่ยน style
  title.style.background = "yellow";
  title.style.fontSize='60px'

  content.setAttribute('class','pubordee') //เปลี่ยนชื่อ class ใหม่]
  box.setAttribute('class','dark')
};

const lightMode = ()=>{
    box.setAttribute('class','light')
}

const darkMode = ()=>{
    box.setAttribute('class','dark')
}
