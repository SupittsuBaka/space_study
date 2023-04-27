"use strict";

// Ждем загрузку контента
window.onload = function () {
  const parallax = document.querySelector(".parallax");

  if (parallax) {
    const content = document.querySelector(".parallax__info-area");
    const clouds = document.querySelectorAll(".images-parallax__clouds");
    const mountains = document.querySelectorAll(".images-parallax__mountains");
    const human = document.querySelector(".images-parallax__human");

    // Коэффициенты
    const forClouds = 35;
    const forMountains = 25;
    const forHuman = 15;

    // Скорость анимации
    const speed = 0.05;

    // Объявление переменных
    let positionX = 0,
      positionY = 0;
    let coordXprocent = 0,
      coordYprocent = 0;

    function setMouseParallaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + distX * speed;
      positionY = positionY + distY * speed;

      // Передаем стили
      for (let i = 0; i < clouds.length; i++) {
        clouds[i].style.cssText = `transform: translate(${
          positionX / forClouds
        }%,${positionY / forClouds}%);`;
      }
      for (let i = 0; i < mountains.length; i++) {
        mountains[i].style.cssText = `transform: translate(${
          positionX / forMountains
        }%,${positionY / forMountains}%);`;
      }
      human.style.cssText = `transform: translate(${positionX / forHuman}%,${
        positionY / forHuman
      }%);`;

      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    parallax.addEventListener("mousemove", function (e) {
      // Получение ширины и высоты блока
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      // Ноль по середине
      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      // Получаем проценты
      coordXprocent = (coordX / parallaxWidth) * 100;
      coordYprocent = (coordY / parallaxHeight) * 100;
    });

    // Parallax при скролле

    let thresholdSets = [];
    for (let i = 0; i <= 1.0; i += 0.0001) {
      thresholdSets.push(i);
    }
    const callback = function (entries, observer) {
      const scrollTopProcent =
        (window.pageYOffset / parallax.offsetHeight) * 100;
      setParallaxItemsStyle(scrollTopProcent);
    };
    const observer = new IntersectionObserver(callback, {
      threshold: thresholdSets,
    });

    observer.observe(document.querySelector(".content"));

    function setParallaxItemsStyle(scrollTopProcent) {
      for (let i = 0; i < mountains.length; i++) {
        mountains[i].parentElement.style.cssText = `transform: translate(0%,-${
          scrollTopProcent / 6
        }%);`;
      }
      for (let i = 0; i < clouds.length; i++) {
        clouds[i].parentElement.style.cssText = `transform: translate(0%,-${
          scrollTopProcent / 6
        }%);`;
      }
      human.parentElement.style.cssText = `transform: translate(0%,-${
        scrollTopProcent / 9
      }%);`;
    }
  }
};
