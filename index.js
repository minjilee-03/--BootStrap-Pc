$(document).ready(function () {
    $(".main-visual-slick-slides").slick({
      autoplay: true,
      cssEase: 'ease-in-out',
      arrows: false,
      dots: true
    });
  });

  $(function () {
    var $header = $('.header-container');
    var $page = $('.main-visual-txt-table');
    var $window = $(window);
    var pageOffsetTop = $page.offset().top;
  
    $window.resize(function () { 
      pageOffsetTop = $page.offset().top;
    });
  
    $window.on('scroll', function () { 
      var scrolled = $window.scrollTop() >= pageOffsetTop; 
      $header.toggleClass('down', scrolled);
    });
  });

$.noConflict();
