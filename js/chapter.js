// THEME TOGGLE
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});

// LIKE BUTTON
const likeBtn = document.getElementById("likeBtn");

likeBtn.addEventListener("click", () => {
  likeBtn.textContent = "💖";
});
