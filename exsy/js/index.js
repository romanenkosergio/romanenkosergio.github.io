$(document).ready(function () {
  let button = $('.js-show-popup'),
    popup = $('.b-popup'),
    popupSend = $('.b-popup--send'),
    popupThanks = $('.b-popup--thanks'),
    html = $('body'),
    activeClass = 'b-popup--active',
    close = $('.js-close-popup'),
    burger = $('.b-burger'),
    headerMenu = $('.b-nav-menu'),
    form = $('.js-send-form');

  /** Preloader **/
  let preloader;
  $(window).on('load', function () {
    preloader = $('.b-preloader');
    preloader.delay(350).fadeOut('slow');
  });

  /** Popup **/
  function showPopup(popup) {
    if (!html.hasClass('oHidden')) {
      popup.addClass(activeClass);
    }
    html.addClass('oHidden');
    $(window).unbind('scroll');
  }

  function closePopup() {
    popup.removeClass(activeClass);
    html.removeClass('oHidden');
    $(window).bind('scroll');

  }

  button.on('click', function (e) {
    showPopup(popupSend);
  });
  close.on('click', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    closePopup();
  });


  /** Anchor link **/
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').on('click', function (e) {
    e.preventDefault();
    let target = $(this.hash),
      position = $(target).offset().top;
    $('html, body').animate({
      scrollTop: position
    }, 1200);
  });
  /** Send Form **/
  $('input[name=phone]').mask('+38(099) 999 99 99');
  form.on('submit', function (e) {
    let form = $(this);
    e.preventDefault();
    e.stopImmediatePropagation();
    closePopup();
    form[0].reset();
    showPopup(popupThanks);
    let data = {
      name: form.find('input[name=name]').val(),
      phone: form.find('input[name=phone]').val(),
    };
    // $.post("send.php", data, function (req) {
    //   closePopup();
    //   form[0].reset();
    //   showPopup(popupThanks);
    // })
  });


  /** Sliders Init **/
  function resizeScreen() {
    if ($(window).width() > 720) {
      let swiper = new Swiper('.js-main-slider', {
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
    } else {
      swiper && swiper.destroy(); // или swiper.autoplay.stop();
    }
  }

  $(window).on('load', function () {
    resizeScreen();
  });

  $(window).resize(function () {
    resizeScreen();
  });

  /** Mobile burger Menu **/
  burger.on('click', function () {
    $(this).toggleClass('b-burger--active');
    headerMenu.toggleClass('b-nav-menu--active');
    html.toggleClass('oHidden--menu');
    $('.b-nav-menu__link').on('click', function () {
      headerMenu.removeClass('b-nav-menu--active');
      burger.removeClass('b-burger--active');
      html.removeClass('oHidden--menu');
    })
  });

});
