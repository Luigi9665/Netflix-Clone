// $(document).ready(function () {
//   $(".carousel").slick({
//     // Target the class of your carousel
//     slidesToShow: 6, // Display 3 slides at a time
//     slidesToScroll: 1, // Scroll 1 slide at a time
//     autoplay: false, // Enable autoplay
//     autoplaySpeed: 2000, // Set autoplay speed to 2 seconds
//     dots: true,
//     arrows: true,
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 1,
    centeredSlides: false,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2, // da 768px in su
      },
      992: {
        slidesPerView: 3, // da 992px in su
      },
      1200: {
        slidesPerView: 5, // da 1200px in su
      },
    },
  });
});
