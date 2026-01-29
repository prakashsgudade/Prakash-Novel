let size = 18;
const content = document.querySelector(".content");

function fontPlus(){
  size++;
  content.style.fontSize = size + "px";
}

function fontMinus(){
  size--;
  content.style.fontSize = size + "px";
}

function darkMode(){
  document.body.classList.remove("sepia");
}

function sepiaMode(){
  document.body.classList.add("sepia");
}
