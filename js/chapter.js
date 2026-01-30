// DARK MODE TOGGLE
function toggleMode() {
  document.body.classList.toggle('dark-mode');
}

// FONT CONTROL
let fontSize = 18;
const paragraphs = document.querySelectorAll('.content p');

function increaseFont() {
  fontSize++;
  paragraphs.forEach(p => p.style.fontSize = fontSize + 'px');
}

function decreaseFont() {
  fontSize--;
  paragraphs.forEach(p => p.style.fontSize = fontSize + 'px');
}
