$(document).ready(function() {
    $(".faq").click(function() {
        $(this).toggleClass("faq-hide")
        $(this).find(".faq-text").slideToggle(400)
    })
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    $(".about-us__button-more").click(function() {
        $(this).hide();
        $(".about-us__review-hidden").removeClass("about-us__review-hidden")
    })
    $('input[type="tel"]').mask("+38 (999) 999-99-99");


    let price = $("input[name=price]");

    $("form").submit(function() {
        $(this).attr("action", "send-contact.php");
        price.val(new_price);
        var text = $('#pop-callback h2').text();
        var theme = $(this).parent().find("input[name=theme]");
        theme.val(text);
        var google_target = $(this).find("[type='submit']").attr('data-ga');
        eval(google_target);
        // setTimeout(() => {
        //     $("form").trigger("reset");
        // }, 2000);
    });
    let new_price;
    $("body").on('click', "*[pop]", function() {
            $(".pop").removeClass("active");
            $("html").removeClass("off-scroll");
            $(".pop iframe").attr("src", "");
            var next_pop = $(this).attr("pop");
            if (next_pop && next_pop != "") {
                $(".pop" + next_pop).addClass("active");
                $("html").addClass("off-scroll");
                new_title = $(this).attr("pop-title");
                new_btn = $(this).attr("pop-btn");
                new_price = $(this).attr("pop-price");
                new_video = $(this).attr("pop-video");
                var new_attr = $(this).attr("link-ga");
                $(".pop" + next_pop + " button").attr('data-ga', new_attr)
                if (new_title && new_title != "") {
                    $(".pop" + next_pop + " h2").text(new_title);
                }
                if (new_btn && new_btn != "") {
                    $(".pop" + next_pop + " button").text(new_btn);
                }
                if (new_price && new_price != "") {
                    $(".pop" + new_price + "input[name=price]").val(new_price);
                    // return this
                }
                if (new_video && new_video != "") {
                    $(".pop" + next_pop + " iframe")[0].src = (new_video + "?autoplay=1");
                }
            }
            return false
        });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    $(function() {

        if (!$.cookie('hideModal')) {

            setTimeout(function() {
                $('#newyear_overlay').css({ 'display': 'block' });
            }, 1000);

            /*setTimeout(function () {
                $('#newyear_overlay').css({'display': 'none'});
            }, 7000);*/

        }
        $.cookie('hideModal', true, {
            // Время хранения cookie в днях
            expires: 1,
            path: '/'
        });
    });

})