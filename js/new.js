$(document).ready(function () {

    $('.intro__slider').slick({
        dots: false,
        arrows: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 500,
    });

    $('.partners__slider').slick({
        dots: false,
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: false,
        speed: 500,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
        ]
    });

    $('.works__slider').slick({
        dots: false,
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: false,
        speed: 500,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
        ]
    });

    const modalCall = $('[data-modal]')
    modalCall.on('click', function (event) {
        event.preventDefault();

        let $this = $(this)
        let modalId = $this.data('modal')

        $(modalId).addClass('show')
        $('body').addClass('no-scroll')

        console.log(modalId)
    })

    $('.works__popup').on('click', function (event) {

        $(this).removeClass('show')
        $('body').removeClass('no-scroll')
    })


    $('.works__popup__wrapper').on('click', function (event) {
        event.stopPropagation()
    })
})