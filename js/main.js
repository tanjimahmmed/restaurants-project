(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
            //----------------slider-----------------//
        $(".testimonial_slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: false,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
            //navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],//
        });
 //----------------slider end-----------------//

  //----------------sticky-----------------//
        $(".header_area").sticky({topSpacing:0});

         //----------------sticky end -----------------//
   
         $(".smooth_menu a").on('click', function(event) {
            
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                var headerHieght = $(".header_area").height();
                 $('html, body').animate({
                    scrollTop: $(hash).offset().top -  headerHieght
                }, 800);
            }
        });
         
        $(document).ready(function(){
              $('.parallax_bg').scrolly({bgParallax:true});
            });
            
    });

   jQuery(window).load(function(){

   });

}(jQuery));	