(function ($) {
    "use strict";
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


// Modal Video
$(document).ready(function () {
    var $videoSrc;
    
    // Set the video source when the play button is clicked
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });

    // When the modal is shown, set the video src attribute
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    });

    // When the modal is hidden, clear the video src attribute
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', '');
    });
});

$(document).ready(function() {
    // When the modal is shown, set the src attribute of the iframe to play the local video
    $('#videoModal').on('show.bs.modal', function (event) {
      var iframe = $(this).find('iframe'); // Get the iframe element within the modal
      var videoSrc = '/img/WhatsApp Video 2024-05-16 at 1.16.46 AM.mp4'; // Path to your local video
      iframe.attr('src', videoSrc); // Set the src attribute of the iframe to play the local video
    });

    // When the modal is hidden, reset the src attribute of the iframe
    $('#videoModal').on('hidden.bs.modal', function (event) {
      var iframe = $(this).find('iframe'); // Get the iframe element within the modal
      iframe.attr('src', ''); // Reset the src attribute of the iframe
    });
  });



    // Service and team carousel
    $(".service-carousel, .team-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 1500,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

