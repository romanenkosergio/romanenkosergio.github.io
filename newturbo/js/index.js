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
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
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
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
    });
      
    $(".about-us-button-more").click(function() { 
      $(this).hide();
      $(".about-us-review-hidden").removeClass("about-us-review-hidden")
    })
    $('input[type="tel"]').mask("+38 (999) 999-99-99")
    $("form").submit(function(event) {
      event.preventDefault();
      res=true;
      $(this).find(".not-valid").remove()
      $(this).find("input").each(function() {
        if ($(this).val()==""){
          $(this).before("<p class='not-valid'>Заполните поле</p>")
          res=false 
        }
      })
      if (res) {
        var query = {
          name:     $(this).parent().find("input[name=name]").val(),
          phone:    $(this).parent().find("input[name=phone]").val(),
          theme:    $('#pop-callback h2').text()
        }
        $.post("send.php", {query: query}, function(data) {
          console.log(data);

        
        $(".pop").removeClass("active")
        $(".pop#pop-thanks").addClass("active")
        $("html").addClass("off-scroll")
        ga('send', 'event', 'call_me', 'Click')

        });
      }
    })
    $("body").on('click', "*[pop]" ,function() {
      $(".pop").removeClass("active")
      $("html").removeClass("off-scroll")
      $(".pop iframe").attr("src" , "")
      var next_pop=$(this).attr("pop")
      if (next_pop && next_pop!="") {
        $(".pop"+next_pop).addClass("active")
        $("html").addClass("off-scroll")
        new_title=$(this).attr("pop-title")
        new_btn=$(this).attr("pop-btn")
        new_video=$(this).attr("pop-video")
        if (new_title && new_title!="") {
          $(".pop"+next_pop+" h2").text(new_title)
        }
        if (new_btn && new_btn!="") {
          $(".pop"+next_pop+" button").text(new_btn)
        }
        if (new_video && new_video!="") {
          $(".pop"+next_pop+" iframe")[0].src =new_video+"?autoplay=1";
        }
      }
      return false
    })
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        dots:true,
        nav:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

})