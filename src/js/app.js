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




var smoothJumpUp = function() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollBy(0,-50);
      setTimeout(smoothJumpUp, 1);
  }
}

window.onscroll = function() {
var scrolled = window.pageYOffset || document.documentElement.scrollTop;
if (scrolled > 100) {
  document.getElementById('upbutton').style.display = 'block';
} else {
  document.getElementById('upbutton').style.display = 'none';
}
}










