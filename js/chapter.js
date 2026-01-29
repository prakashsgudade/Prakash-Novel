let fontSize = 20;

function increaseFont(){
  fontSize += 2;
  document.querySelectorAll('.content p')
    .forEach(p => p.style.fontSize = fontSize + 'px');
}

function decreaseFont(){
  fontSize -= 2;
  document.querySelectorAll('.content p')
    .forEach(p => p.style.fontSize = fontSize + 'px');
}

function toggleMode(){
  document.body.classList.toggle("dark");
}
