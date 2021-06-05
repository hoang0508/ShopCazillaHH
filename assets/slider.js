$(document).ready(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<span class="prev-Arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
        nextArrow: '<span class="next-Arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
    });
});



$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        // margin: 10,
        loop: true,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 7000,
    });
});



/*loading*/

$(window).on('load', function(event) {
    $('body').removeClass('preloading');
    $('.load').delay(1000).fadeOut('slow');
});