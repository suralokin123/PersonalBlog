$(document).ready(function(){
    $('.achievements-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '.prev',
        nextArrow: '.next'
    });
});