$(document).ready(function() {
    $(".slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<span class="prev-Arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
        nextArrow: '<span class="next-Arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
    });
});

/*banner*/

var slideIndex = 1;
showSlides();

showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000);
}

/*loading*/

// $(window).on('load', function(event) {
//     $('body').removeClass('preloading');
//     $('.load').delay(9500).fadeOut('slow');
// });