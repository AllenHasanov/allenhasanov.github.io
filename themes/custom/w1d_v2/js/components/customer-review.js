(function ($, Drupal) {
  Drupal.behaviors.customerReview = {
    attach: function (context, settings) {
      const swiper = new Swiper(".review-slider.swiper:not(.swiper-initialized)", {
        loop: true,
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
    },
  };
})(jQuery, Drupal);
