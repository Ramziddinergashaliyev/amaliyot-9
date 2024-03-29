$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    // autoplay: true,
    // autoplayTimeout: 1000,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: false,
      },
      900: {
        items: 1,
        nav: false,
      },
      1100: {
        items: 2,
        nav: true,
        loop: false,
      },
    },
  });
});
