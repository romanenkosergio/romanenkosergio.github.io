$(document).ready(function () {
  /** Masked Input **/
  $('input[name=phone]').mask('+38(099) 999 99 99');

  /** Anchor link **/
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });
  let up = $('.b-up');
  $(window).scroll(function (e) {
    if (window.pageYOffset >= 220) {
      up.addClass('b-up--active');
    } else up.removeClass('b-up--active');
  });
  $(window).on('load', function (e) {
    if (window.pageYOffset >= 220) {
      up.addClass('b-up--active');
    } else up.removeClass('b-up--active');
  });

  /** Select **/
  $('.js-select').select2();

  /** Autosize textarea **/
  autosize($('textarea'));

  /** Sliders **/
  var mySwiper = new Swiper(".js-slider", {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: -490,
    effect: "coverflow",
    coverflow: {
      rotate: 0,
      stretch: 0,
      depth: 270,
      modifier: 3,
      slideShadows: true
    },
    breakpoints: {
      800: {
        spaceBetween: -320,
        slidesPerView: 2,
        coverflow: {
          rotate: 0,
          stretch: 90,
          depth: 500,
          modifier: 1,
          slideShadows: true
        }
      },
      481: {
        slidesPerView: 1,
        spaceBetween: 0,
        coverflow: {
          rotate: 0,
          stretch: 0,
          depth: 20,
          modifier: 1,
          slideShadows: true
        }
      }
    },
    nextButton: ".button-next",
    prevButton: ".button-prev"
  });
  let swiper = undefined,
    crashSlider = undefined,
    reviewsSlider = undefined,
    stepsSlider = undefined;

  function resizeScrenn() {
    if ($(window).width() < 769 && swiper == undefined) {
      if ($(".js-mob-slider").length > 0) {
        swiper = new Swiper('.js-advantages-slider', {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
          pagination: '.swiper-pagination',
          simulateTouch: true,
          paginationClickable: true,
          breakpoints: {
            576: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 10,
            }
          },

        });
        crashSlider = new Swiper('.js-crash-slider', {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
          pagination: '.swiper-pagination',
          simulateTouch: true,
          paginationClickable: true,
          breakpoints: {
            576: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 10,
            }
          }
        });
        stepsSlider = new Swiper('.js-steps-slider', {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
          pagination: '.swiper-pagination',
          simulateTouch: true,
          paginationClickable: true,
          breakpoints: {
            576: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 10,
            }
          }
        });
        reviewsSlider = new Swiper('.js-reviews-slider', {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
          simulateTouch: true,
          breakpoints: {
            576: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 10,
            }
          }
        });
      }
    } else if ($(window).width() > 768 && swiper != undefined) {
      swiper && swiper.destroy();
      crashSlider && crashSlider.destroy();
      stepsSlider && stepsSlider.destroy();
      reviewsSlider && reviewsSlider.destroy();
      swiper = undefined;
      $('.swiper-wrapper').removeAttr('style');
      $('.swiper-slide').removeAttr('style');
    }
  }

  $(window).on('load', function () {
    resizeScrenn();
  });
  $(window).resize(function () {
    resizeScrenn();
  });


  /** Show text**/
  $('.js-show-text').on('click', function () {
    $('.b-about__text--hidden').slideToggle().addClass('b-about__text--active');
    $('.b-about__button').toggleClass('b-about__button--active')
    let text = $('.b-about__button span').text();
    text = text == 'подробнее' ? 'скрыть' : 'подробнее';
    $('.b-about__button span').text(text);
  });
  /** Popup **/
  let popup = $('.b-popup'),
    popupSend = $('.b-popup--send'),
    popupThanks = $('.b-popup--thanks'),
    activeClass = 'b-popup--active',
    html = $('html');

  function showPopup(popup) {
    popup.addClass(activeClass);
    $(window).unbind('scroll');
  }

  function closePopup() {
    popup.removeClass(activeClass);
    $(window).bind('scroll');

  }

  $(window).on('load', function () {
    $('.js-show-popup').on('click', function () {
      console.log($(this));
      showPopup(popupSend);

    });
  });
  $('.js-show-popup').on('click', function () {
    showPopup(popupSend);

  });
  $('.js-close-popup').on('click', function (e) {
    closePopup();
  });
  /** Send Form**/
  $('.js-send-form').on('click', function () {
    closePopup();
    showPopup(popupThanks);

  });

  /** Mobile burger **/
  $('.b-burger').on('click', function () {
    $(this).toggleClass('b-burger--active');
    $('.b-nav').toggleClass('b-nav--active');
    $('body').toggleClass('mobVh');

  });
  $('.b-nav__link').on('click', function () {
    $('.b-burger').removeClass('b-burger--active');
    $('.b-nav').removeClass('b-nav--active');
    $('body').removeClass('mobVh');

  });

  /** Random Img **/
  function randomImg() {
    let path = 'img/fastForm/',
      min = 1,
      max = 4,
      random = min - 0.5 + Math.random() * (max - min + 1);
    $('.b-fast-form__img').attr('src', `${path}man${Math.round(random)}.png`);
    console.log(path);
  }

  $(window).on('load', randomImg());
});
