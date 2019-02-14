$(document).ready( function() {
    $('.article-slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: 5000,
        nextArrow: '<div class="article-slider__arrow article-slider__arrow--next"><svg><use xlink:href="img/sprites.svg#next"></use></svg></div>', // Кастомная стрелка "далее"
        prevArrow: '<div class="article-slider__arrow article-slider__arrow--prev"><svg><use xlink:href="img/sprites.svg#prev"></use></svg></div>'
    });

    if ($(window).width()<= '768') {
        $('.logo').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass("logo--active", ".logo-box:focus");
            $('.nav-menu').toggleClass('nav-menu--active');
            $('body, html').toggleClass('overflowHidden');
        });
    }
    else {
    }
});