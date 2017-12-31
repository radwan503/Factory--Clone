(function ($) {
    "use strict";
   jQuery(document).ready(function ($) {
        $(".hamepage-slides").owlCarousel({
            items: 1,
             nav: true,
             dots: false,
             autoplay: false,
             loop: true,
            navText: ["<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"],
            mouseDrag: false,
            touchDrag: false,
         });
        $(".hamepage-slides").on("translate.owl.carousel", function () {
            $(".single-slide-item h2, .single-slide-item p").removeClass("animated fadeIn").css("opacity", "0");
            $(".single-slide-item .slide-btn").removeClass("animated fadeIn").css("opacity", "0");
        });
        $(".hamepage-slides").on("translated.owl.carousel", function () {
            $(".single-slide-item h2, .single-slide-item p").addClass("animated fadeIn").css("opacity", "1");
            $(".single-slide-item .slide-btn").addClass("animated fadeIn").css("opacity", "1");
        });
        $(".gallery-lightbox").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
          new WOW().init();
    });
    
    jQuery(window).load(function () {
        jQuery(".factorian-slider-preloder-wrap, .factorian-site-preloder-wrap").fadeOut(1000);
    });
    
}(jQuery));