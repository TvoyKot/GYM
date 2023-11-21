$('.header-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                autoplay: true
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                autoplay: true
            }
        }
    ]
})
$('.big-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                autoplay: true,
                adaptiveHeight: true
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                autoplay: true
            }
        }
    ]
})
$('.menu').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active')
})

