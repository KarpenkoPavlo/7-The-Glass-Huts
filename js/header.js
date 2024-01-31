/*header backgeound start*/
let imgLogo = document.querySelector('.imgLogo');
let item__link = document.querySelectorAll('.item__link');

window.onscroll = function() {
  let header = document.querySelector(".header");

  if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    header.style.backgroundColor = "rgb(45%, 45%, 45%, 0.7)";
    imgLogo.src = "/img/header/logoWhite.svg";

    item__link.forEach(function(item) {
      item.style.color = 'white';
    })

  } else {
    header.style.backgroundColor = "rgb(5%, 5%, 5%, 0)";
    imgLogo.src = "/img/header/logo.svg";

    item__link.forEach(function(item) {
      item.style.color = 'black';
    })
  }
}
/*header backgeound end*/

//--------------------------------------------------

/*burger start*/
function burgerF() {
  let burger = document.querySelector(".header__burger");
  let headerMenu = document.querySelector(".header__menu");
  let overlay = document.querySelector('.overlay');
  let header__language = document.querySelector('.header__language');

  burger.addEventListener("click", function() {
    let computedStyle = window.getComputedStyle(headerMenu);

    // Додаю та видаляю на burger при кліці клас
    this.classList.toggle("cross");

    if (computedStyle.display === "none") {
      headerMenu.style.display = "block";
      headerMenu.style.left = "0";
      overlay.style.display = "block";
      header__language.style.display = "block";
      imgLogo.src = "/img/header/logoWhite.svg";

      item__link.forEach(function(item) {
        item.style.color = 'white';
      })
      document.body.style.overflow = "hidden";
    } else if (computedStyle.display === "block") {
      headerMenu.style.display = "none";
      headerMenu.style.left = "-100%";
      overlay.style.display = "none";
      header__language.style.display = "none";
      imgLogo.src = "/img/header/logo.svg";

      item__link.forEach(function(item) {
        item.style.color = 'black';
      })
      document.body.style.overflow = "auto";
    }
  });
}

burgerF();
/*burger end*/