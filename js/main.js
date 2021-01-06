$(".owl-carousel").owlCarousel({
    loop: false,
    items: 2,
    dots: true,
    margin: 65,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        700: {
            items: 2,
        },
        1024: {
            items: 3,
        }
    }
});

$('.button_activ').click(function(){
    $(this).addClass('disable_act');
    $('.card').addClass('active');
});