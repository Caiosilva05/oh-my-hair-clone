$(function () {
    $('.watch-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('#voltar'),
        nextArrow: $('#avancar'),
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
