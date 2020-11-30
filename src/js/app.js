$('.nav-icon1').click(function() {
    $('#nav-icon1').toggleClass('open');
    $('.hamburger-menu').toggleClass("active");
});

var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, loop: true
});

$(window).scroll(function(){
  if ($(window).scrollTop() >= 1) {
      $('header').addClass('active');
  }
  else {
      $('header').removeClass('active');
  }
});








