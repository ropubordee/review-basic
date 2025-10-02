const box = document.getElementById("box");
let status;
const addDarkMode = () => {
  box.classList.add("darkMode");
};

const removeDarkMode = () => {
  box.classList.remove("darkMode");
};

const switchMode = () => {
  box.classList.toggle("darkMode");
  status = box.classList.contains("darkMode");
  console.log(status);
  if(status){
    box.style.color='yellow'
  }else{
    box.style.color ='red'
  }
};
