/*CLOSE SIDE MENU BY CLICK ON ANCHOR*/
let anchors = document.getElementsByClassName("header-nav__list")[0].children;

for(let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('click', () => {
    if(window.innerWidth < 1023) {
      sideMenu.click();
    }
  })
}

/*PREVENT SCROLL*/
let sideMenu = document.getElementById("side-menu");

sideMenu.addEventListener('click', () => {
  document.body.classList.toggle("prevent-scroll");
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
})

