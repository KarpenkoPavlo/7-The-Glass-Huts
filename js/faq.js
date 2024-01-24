document.addEventListener("DOMContentLoaded", function () {
    let faqButt = document.querySelectorAll('.faqButt');
    let faqGreen = document.querySelectorAll(".faqGreen");
  
    faqButt.forEach((button, index) => {
      let arrowDown = button.querySelector(".arrowDown");
      let arrowUp = button.querySelector(".arrowUp");
  
      button.addEventListener("click", function () {
        if (faqGreen[index].style.display === "block") {
            faqGreen[index].style.display = "none";
            arrowDown.style.display = "block";
            arrowUp.style.display = "none";

        } else {
            faqGreen[index].style.display = "block";
            arrowDown.style.display = "none";
            arrowUp.style.display = "block";
        }
      });
    });
  });

//----------------

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