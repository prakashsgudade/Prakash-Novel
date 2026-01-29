let isDark = true;

function toggleMode() {
  if(isDark){
    document.body.classList.remove('dark-mode');
    document.body.classList.add('sepia-mode');
  } else {
    document.body.classList.remove('sepia-mode');
    document.body.classList.add('dark-mode');
  }
  isDark = !isDark;
}

function increaseFont() {
  let content = document.querySelector('.content');
  let style = window.getComputedStyle(content, null).getPropertyValue('font-size');
  let currentSize = parseFloat(style);
  content.style.fontSize = (currentSize + 2) + 'px';
}

function decreaseFont() {
  let content = document.querySelector('.content');
  let style = window.getComputedStyle(content, null).getPropertyValue('font-size');
  let currentSize = parseFloat(style);
  content.style.fontSize = (currentSize - 2) + 'px';
}
