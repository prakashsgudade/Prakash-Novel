const pages = document.querySelectorAll(".page");
document.getElementById("totalPages").innerText = pages.length;

let dark = true;
document.getElementById("themeBtn").onclick = () => {
  document.body.style.background = dark ? "#111" : "#c9b08a";
  dark = !dark;
};
