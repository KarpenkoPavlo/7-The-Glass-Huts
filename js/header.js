/*header backgeound start*/

window.onscroll = function() {
    let header = document.querySelector(".header");
    let imgLogo = document.querySelector('.imgLogo');
    let item__link = document.querySelectorAll('.item__link');
  
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      header.style.backgroundColor = "rgb(45%, 45%, 45%, 0.7)";
      imgLogo.src = "/img/header/logoWhite.svg";
  
      item__link.forEach(function(item) {
        item.style.color = 'white';
      })
  
    } else {
      header.style.backgroundColor = "rgb(5%, 5%, 5%, 0)";
      imgLogo.src = "/img/header/logo.svg";
  
      // item__link.forEach(function(item) {
      //   item.style.color = 'black';
      // })
    }
  }
  /*header backgeound end*/