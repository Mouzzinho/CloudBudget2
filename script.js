$(document).ready(function () {

    const burgerOn = $('.mobile-menu');
    let burger = $('.burger-menu');
    const burgerOff = $('.mobile-menu__burger');

    burgerOn.on('click', function () {
        burger.addClass('active');
    })
    burgerOff.on('click', function () {
        burger.removeClass('active');
    })

    $('.skip').on('click', function () {
        burger.removeClass('active');
        let target = $(this).attr('data-target');
        $('body, html').animate({
            scrollTop: $('.' + target).offset().top + 1
        }, 1000);
    });


    //$('body > div:first-child, .cbalink').remove();


})