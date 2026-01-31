document.addEventListener("DOMContentLoaded", () => {

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

    if (counter) {
      counter.innerText = "पृष्ठ " + current + " / " + totalPages;
    }
  });

});

function toggleDark() {
  document.body.classList.toggle("dark");
}
