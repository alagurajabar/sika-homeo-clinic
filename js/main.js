(function ($) {
    "use strict";
    
    // JS Index
    //----------------------------------------
    // 1. sticky menu
    // 2. mobile-menu(mean-menu)
    // 3. preloader
    // 4. mobile-menu-sidebar
    // 5. background image
    // 6. testimonial active (home1)
    // 7. testimonial active (home2)
    // 8. product-active4-variable-width (home4)
    // 9. testimonial active4 (home4)
    // 10. testimonial active3 (home4)
    // 11. testimonial-active-home5 (home5)
    // 12. testimonial active3 (home4)
    // 13. home6-team-active (home6)
    // 14. home12 menu bar
    // 15. counter js
    // 16. header-language
    // 17. header-search
    // 18. home5 screenshot active
    // 19. Isotope js
    // 20. tilt js
    // 21. aos js
    // 22. parallax
    // 23. parallax
    // 24. Animate the scroll to top
    // 25. blog-gallery-active
    // 26. Contact form
    //-------------------------------------------------










    // 1. sticky menu
    // ---------------------------------------------------------------------------
    var wind = $(window);
    var sticky = $("#header-sticky");
    wind.on('scroll', function () {
        var scroll = $(wind).scrollTop();
        if (scroll < 2) {
            sticky.removeClass("sticky-menu");
        } else {
            $("#header-sticky").addClass("sticky-menu");
        }
    });




    // 2. mobile-menu(mean-menu)
    //---------------------------------------------------------------------------
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
    });



    // 3. preloader
    //---------------------------------------------------------------------------
    $(window).load(function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });



    // 4. mobile-menu-sidebar
    //---------------------------------------------------------------------------
    $(".mobile-menubar").on("click", function(){
        $(".side-mobile-menu").addClass('open-menubar');
        $(".body-overlay").addClass("opened");
    });
    $(".close-icon").click(function(){
        $(".side-mobile-menu").removeClass('open-menubar');
        $(".body-overlay").removeClass("opened");
    });

    $(".body-overlay").on("click", function () {
		$(".side-mobile-menu").removeClass('open-menubar');
		$(".body-overlay").removeClass("opened");
	});



    // 5. background image
    //---------------------------------------------------------------------------
    $("[data-background]").each(function (){
        $(this).css("background-image","url(" + $(this).attr("data-background") + ")");
    });





    // 6. testimonial active (home1)
    //---------------------------------------------------------------------------
    $('.testimonial-active').slick({
        dots: false,
        arrows: true,
        prevArrow:'<b><span class="fal fa-long-arrow-left l-a"></span></b>',
        nextArrow:'<b><span class="fal fa-long-arrow-right r-a"></span></b>',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '30px',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });



    // 7. testimonial active (home2)
    //---------------------------------------------------------------------------
    $('.testimonial-active2-variable-width').slick({
        dots: false,
        arrows: true,
        variableWidth: true,
        prevArrow:'<b><span class="fal fa-long-arrow-left l-a"></span></b>',
        nextArrow:'<b><span class="fal fa-long-arrow-right r-a"></span></b>',
        infinite: true,
        speed: 500,
        centerPadding: '30px',
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    variableWidth: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    centerPadding: '30px',
                }
            }
        ]
    });



    // 8. product-active4-variable-width (home4)
    //---------------------------------------------------------------------------
    $('.product-active4-variable-width').slick({
        dots: false,
        arrows: true,
        variableWidth: true,
        prevArrow:'<b><span class="fal fa-long-arrow-left l-a"></span></b>',
        nextArrow:'<b><span class="fal fa-long-arrow-right r-a"></span></b>',
        infinite: true,
        speed: 500,
        centerPadding: '30px',
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    variableWidth: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                }
            }
        ]
    });



    // 9. testimonial active4 (home4)
    //---------------------------------------------------------------------------
    $('.testimonial-active4').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll:1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });




    // 10. testimonial active3 (home4)
    //---------------------------------------------------------------------------
    $('.testimonial-active3').slick({
        dots: false,
        arrows: true,
        prevArrow:'<b><span class="fal fa-long-arrow-left l-a"></span></b>',
        nextArrow:'<b><span class="fal fa-long-arrow-right r-a"></span></b>',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
    });



    // 11. testimonial-active-home5 (home5)
    //---------------------------------------------------------------------------
    $('.testimonial-active-home5').slick({
        infinite:false,
        dots: true,
        arrows: true,
        prevArrow:'<b><span class="fal fa-long-arrow-left l-a"></span></b>',
        nextArrow:'<b><span class="fal fa-long-arrow-right r-a"></span></b>',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll:1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:3,
                }
            }
        ]
    });




    // 12. testimonial active3 (home4)
    //---------------------------------------------------------------------------
    $('.testimonial-active-home6').slick({
        dots: false,
        arrows: true,
        prevArrow:'<b><span class="fal fa-long-arrow-left l-a"></span></b>',
        nextArrow:'<b><span class="fal fa-long-arrow-right r-a"></span></b>',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
    });




    // 13. home6-team-active (home6)
    //---------------------------------------------------------------------------
    $('.home6-team-active ').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll:2,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });




    // 14. home12 menu bar
    // //---------------------------------------------------------------------------
    $(".home12-menu").click(function() {
        $(".home12-menu").toggleClass("show-menu");
        $(".menu-bar-home12").toggleClass("show-menu");
    });



    // 15. counter js
    // ---------------------------------------------------------------------------
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });



    // 16. header-language
    //---------------------------------------------------------------------------
    $(".language").on('click',function(){
        $(".show-language").toggle();
    });



    // 17. header-search
    //---------------------------------------------------------------------------
    $(".header-search").on("click",function(){
        $(".header-search-details").addClass('open-search-info');
    });
    $(".close-icon").click(function(){
        $(".header-search-details").removeClass('open-search-info');

    });
    


    // 18. home5 screenshot active
    // ---------------------------------------------------------------------------
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        arrows: false,
        dots: true,
        fade: false,
        infinite:true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        asNavFor: '.slider-for',
        autoplay:true,
        infinite:true,
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: "0", 
        responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        centerMode: false,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false,
                    }
                },
            ]


      

      });



    // 19. Isotope js
    // ---------------------------------------------------------------------------
    $('.grid').imagesLoaded( function() {
        var grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            layoutMode: 'masonry',
            masonry: {
            // use outer width of grid-sizer for columnWidth
            // columnWidth: '.grid-item'
            columnWidth: 1,
            // horizontalOrder: true
            }
        });

        // filter items on button click
        $('.portfolio-menu').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            grid.isotope({ filter: filterValue });
        });
    });
    //for menu active class
    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });




    // 20. tilt js
    // ---------------------------------------------------------------------------
    $('.tilt').tilt({
        maxTilt:        15,
        perspective:    1500,
    });



    // 21. aos js
    // ---------------------------------------------------------------------------
    AOS.init();



    // 22. parallax
    // ---------------------------------------------------------------------------
    var scene = $('#scene').get(0);







    // 24. Animate the scroll to top
    // --------------------------------------------------------------------------
    // Show or hide the sticky footer button
    $(window).on('scroll', function() {
        if($(this).scrollTop() > 600){
            $('#scroll').fadeIn(1000);
        } else{
            $('#scroll').fadeOut(1000);
        }
    });

    $('#scroll').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });



    // 25. blog-gallery-active
    //---------------------------------------------------------------------------
    $('.blog-gallery-active').slick({
        dots: false,
        arrows: true,
        prevArrow:'<b><span class="fal fa-angle-left l-a"></span></b>',
        nextArrow:'<b><span class="fal fa-angle-right r-a"></span></b>',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
    });



    

    // 26. Contact form 
    //---------------------------------------------------------------------------
    $(function() {
        // Here is the form
        var form = $('#contact-form');

        // Getting the messages div
        var formMessages = $('.form-message');


        // Setting up an event listener for the contact form
    $(form).submit(function(event) {
        // Stopping the browser to submit the form
        event.preventDefault();
        
        // Serializing the form data
        var formData = $(form).serialize();

        // Submitting the form using AJAX
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        }).done(function(response) {
        
            // Making the formMessages div to have the 'success' class
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Setting the message text
            $(formMessages).text(response);

            // Clearing the form after successful submission 
            $('#inputName').val('');
            $('#inputEmail').val('');
            $('#inputPhone').val('');
            $('#inputMessage').val('');
        }).fail(function(data) {
        
            // Making the formMessages div to have the 'error' class
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Setting the message text
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occurred and your message could not be sent.');
            }
        });

    });

    });






        
})(jQuery);	  

