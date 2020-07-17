$('.navbar-header, .main-menu').off('mouseenter').off('mouseleave');

$('nav.header-navbar a.menu-handle').off('click');
$('nav.header-navbar a.menu-handle').on('click',function (evt) {
    var collapsed=$('body').hasClass('menu-collapsed');
    if (collapsed) {
        $('body').removeClass('menu-collapsed');
        $('body').addClass('menu-expanded');
        $('div.main-menu').addClass('expanded');
        $(this).html('<i class="ficon feather icon-arrow-left"></i>');
    }else{
        $('body').addClass('menu-collapsed');
        $('body').removeClass('menu-expanded');
        $('div.main-menu').removeClass('expanded');
        $(this).html('<i class="ficon feather icon-align-left"></i>');
    }
});

var mySwiper14 = new Swiper('.swiper-responsive-breakpoints', {
  slidesPerView: 6,
  spaceBetween: 50,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    }
  }
});

var tapSlider = document.getElementById('audio');

  noUiSlider.create(tapSlider, {
    start: 100,
    direction: 'rtl',
    behaviour: 'tap',
    connect: 'upper',
    range: {
      'min': 0,
      'max': 100
    }
  });
