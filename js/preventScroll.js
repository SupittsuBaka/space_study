let sideMenu = document.getElementById("side-menu");

sideMenu.addEventListener('click', () => {
  document.body.classList.toggle("prevent-scroll");
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}) 