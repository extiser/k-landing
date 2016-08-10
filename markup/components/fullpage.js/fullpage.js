$(document).ready(function() {
  $('#fullpage').fullpage({
    // fixedElements: '.header',
    paddingTop: '100px',
    slidesNavigation: false,
    controlArrows: false,
    afterRender: function(){
      $('.js-slick').slick({
        infinite: true,
        rtl: false,
        slidesToShow: 1,
        arrows: true,
        prevArrow: '.js-slick-arrow-prev',
        nextArrow: '.js-slick-arrow-next',
        draggable: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            infinite: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }]
      });

      $('.js-slick-vertical').slick({
        // infinite: true,
        pauseOnHover: true,
        autoplaySpeed: 4000,
        speed: 300,
        slidesToShow: 3,
        arrows: true,
        // prevArrow: '.js-slick-arrow-prev',
        // nextArrow: '.js-slick-arrow-next',
        draggable: true,
        vertical: true,
        // verticalSwiping: true,
        // centerMode: true,
        autoplay: true,
        // adaptiveHeight: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            infinite: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }]
      });
      $('.slick-current').next().addClass('slick-vertical-slide--active');
      $('.js-slick-vertical').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.slick-current').next().addClass('slick-vertical-slide--active').siblings().removeClass('slick-vertical-slide--active');
      });
    }
  });
});