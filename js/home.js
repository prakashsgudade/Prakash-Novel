document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade");

  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, index * 250);
  });
});
