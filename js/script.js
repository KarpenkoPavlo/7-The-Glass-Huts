/*swiper start*/
const mySwiperLeft = new Swiper(".mySwiperLeft", {
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

const mySwiperRight = new Swiper(".mySwiperRight", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
})