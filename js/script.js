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
function burgerF() {
  let burger = document.querySelector(".header__burger");
  let headerMenu = document.querySelector(".header__menu");
  let overlay = document.querySelector('.overlay');

  burger.addEventListener("click", function() {
    let computedStyle = window.getComputedStyle(headerMenu);

    if (computedStyle.display === "none") {
      headerMenu.style.display = "block";
      headerMenu.style.left = "0";
      overlay.style.display = "block";
      document.body.style.overflow = "hidden";
    } else if (computedStyle.display === "block") {
      headerMenu.style.display = "none";
      headerMenu.style.left = "-100%";
      overlay.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
}

burgerF();
/*burger end*/