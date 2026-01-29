let fontSize = 18;

function toggleMode(){
  document.body.classList.toggle("sepia");
}

function increaseFont(){
  fontSize++;
  document.querySelector(".content").style.fontSize = fontSize + "px";
}

function decreaseFont(){
  fontSize--;
  document.querySelector(".content").style.fontSize = fontSize + "px";
}
