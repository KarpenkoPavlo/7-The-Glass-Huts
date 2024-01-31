/*hidden start*/
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
/*hidden end*/