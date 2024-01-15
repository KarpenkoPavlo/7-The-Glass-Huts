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

/*------------------------------------------------------------------------------------------*/

/* CheckBox */
function checkBox() {
  let checkBox = document.querySelector('.checkbox');
  let currentData = checkBox.getAttribute('data');

  if(currentData === 'normal') {
    checkBox.src = "/img/choose/checkboxActive.svg";
    checkBox.setAttribute('data', 'active');
  } else if(currentData === 'active') {
    checkBox.src = "/img/choose/checkboxNormal.svg";
    checkBox.setAttribute('data', 'normal');
  }
}

document.querySelector('.checkbox').addEventListener('click', checkBox);

/*------------------------------------------------------------------------------------------*/

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