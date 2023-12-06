$(function(){
  $(".slider").slick({
    slidesToShow:1,
    slidesToScroll:1,
    dots:true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    dotsClass: "customDots",
  });

  $('.testimonialSlider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:true,
    arrows: false,
    autoplay: false,
    dotsClass: "customDot",
    autoplay:true,
  });
// acos
  AOS.init();
  // venobox
  new VenoBox({
    selector: '.gellary',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane',
    autoplay:true,
});
})