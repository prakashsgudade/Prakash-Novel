let currentPage = 1;
const pages = document.querySelectorAll(".page");

document.getElementById("totalPages").innerText = pages.length;

window.addEventListener("scroll", () => {
  pages.forEach((page, index) => {
    const rect = page.getBoundingClientRect();
    if(rect.top < window.innerHeight/2 && rect.bottom > window.innerHeight/2){
      currentPage = index + 1;
      document.getElementById("pageNum").innerText = currentPage;
    }
  });
});

function toggleTheme(){
  document.body.classList.toggle("light");
}
