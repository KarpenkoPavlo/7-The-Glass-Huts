/*hidden start*/
document.addEventListener("DOMContentLoaded", function () {
  let buttonsHidden = document.querySelectorAll(".choose__button");
  let articlesHidden = document.querySelectorAll(".chooseItem__hidden");

  buttonsHidden.forEach((button, index) => {
    let arrowDown = button.querySelector(".arrowDown");
    let arrowUp = button.querySelector(".arrowUp");

    button.addEventListener("click", function () {
      if (articlesHidden[index].style.display === "block") {
        articlesHidden[index].style.display = "none";
        arrowDown.style.display = "block";
        arrowUp.style.display = "none";
      } else {
        articlesHidden[index].style.display = "block";
        arrowDown.style.display = "none";
        arrowUp.style.display = "block";
      }
    });
  });
});
/*hidden end*/

/* checkMinusPlus */

function checkMinusPlus() {
  let n = 0;

  let chekMinus = document.querySelector('.chekMinus');
  let checkPlus = document.querySelector('.checkPlus');
  let checkNumber = document.querySelector('.checkNumber');

  chekMinus.addEventListener('click', () => {
    if(checkNumber.textContent == 0) {
      preventDefault();
    } else {
      n--;
      checkNumber.textContent = n;
    }
  })

  checkPlus.addEventListener('click', () => {
    n++;
    checkNumber.textContent = n;
  })
}

checkMinusPlus();