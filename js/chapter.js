// Page fade-in effect
const pages = document.querySelectorAll('.page');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
},{threshold:0.3});

pages.forEach(p => {
  p.style.opacity = 0;
  p.style.transform = 'translateY(30px)';
  p.style.transition = '0.8s ease';
  observer.observe(p);
});
