// DARK / SEPIA MODE TOGGLE
function toggleMode(){
  document.body.classList.toggle('dark-mode');
}

// FONT CONTROL
let content = document.querySelectorAll('.content p');
let fontSize = 18;

function increaseFont(){
  fontSize += 1;
  content.forEach(p => p.style.fontSize = fontSize + 'px');
}

function decreaseFont(){
  fontSize -= 1;
  content.forEach(p => p.style.fontSize = fontSize + 'px');
}

// PAGE NUMBERING
document.querySelectorAll('.page').forEach((page, i) => {
  page.style.counterReset = 'page ' + (i+1);
});
