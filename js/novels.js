window.addEventListener("load", () => {
  document.querySelectorAll(".fade").forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");
    }, 200 + i*100);
  });
});
