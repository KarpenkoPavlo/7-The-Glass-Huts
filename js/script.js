/*swiper start*/
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });
/*swiper end*/



/*burger start*/
document.addEventListener(".DOMContentLoaded", function() {
  let burger = document.querySelector(".header__burger");
  let headerMenu = document.querySelector(".header__menu")

  burger.addEventListener("click", function() {
    if (headerMenu.computedStyleMap.left === "-100%") {
      headerMenu.computedStyleMap.left = "0";
    } else {
      headerMenu.style.left = "100%";
    }
  });
});
/*burger end*/



/*header backgeound start*/
let header = document.querySelector(".header");

window.onscroll = function() {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.style.backgroundColor = "rgb(75%, 75%, 75%, 0.7)";
  } else {
    header.style.backgroundColor = "rgb(5%, 5%, 5%, 0)";
  }
}
/*header backgeound end*/