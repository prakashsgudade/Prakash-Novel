/* ===== PAGE COUNTER ===== */
const pages = document.querySelectorAll(".page");
const counter = document.getElementById("pageCounter");
const totalPages = pages.length;

window.addEventListener("scroll", () => {
  let current = 1;

  pages.forEach((page, i) => {
    if (page.getBoundingClientRect().top < window.innerHeight / 2) {
      current = i + 1;
    }
  });

  counter.innerText = `पृष्ठ ${current} / ${totalPages}`;
});

/* ===== DARK MODE ===== */
function toggleDark() {
  document.body.classList.toggle("dark");
}

/* ===== SMOOTH SCROLL ===== */
document.documentElement.style.scrollBehavior = "smooth";

/* ===== NAV BUTTON GLOW ===== */
const navButtons = document.querySelectorAll(".nav-btn");
if (navButtons.length > 0) {
  navButtons[navButtons.length - 1].classList.add("next-glow"); // last button glow
  if(navButtons.length >= 2) {
    navButtons[0].classList.add("home-glow"); // first button glow (home)
    if(navButtons.length > 2){
      navButtons[1].classList.add("previous-glow"); // middle button glow (previous)
    }
  }
}
