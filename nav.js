const links = document.querySelectorAll('.nav_right .li-a');

links.forEach(link => {
  link.addEventListener('mouseleave', () => {
    console.log("鼠标划出");
    link.classList.remove('active');
  });
});