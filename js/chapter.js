let size = 18;

function increaseFont(){
  size += 1;
  document.querySelector('.content').style.fontSize = size + "px";
}

function decreaseFont(){
  size -= 1;
  document.querySelector('.content').style.fontSize = size + "px";
}

function toggleMode(){
  document.body.classList.toggle("dark");
}
