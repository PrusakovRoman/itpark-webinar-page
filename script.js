// $(function() {
//   $('.promo__marquee').marquee({
//     startVisible: true,
//     duplicated: true,
//     delayBeforeStart: 0,
//     speed: 650
//   });
// });

$(document).on('ready', function() {
  $(".slider-wrap__slider").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 6000,
    speed: 500,
    responsive: [
      {
        breakpoint: 576, 
          settings: {
            arrows: false
          }
      }
    ]
  });
});
