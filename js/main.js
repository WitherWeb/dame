const heroSwiper = document?.querySelector('.hero__swiper');
new Swiper(heroSwiper, {
  loop: true,
  slidesPerView: '1',
  onlyExternal: true,
  simulateTouch: false,
  autoplay: {
    delay: 5300,
  },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});
const bFonSwiper = document?.querySelector('.b-fon__swiper');
new Swiper(bFonSwiper, {
    loop: true,
    slidesPerView: '1',
    effect: 'fade',
    onlyExternal: true,
    simulateTouch: false,
    autoplay: {
        delay: 5300,
    },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });
  const servicesSwiper = document?.querySelector('.services__swiper');
  new Swiper(servicesSwiper, {
      loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 20
          },
          880: {
            slidesPerView: 2.5,
            spaceBetween: 20
          },
          // when window width is >= 480px
          1050: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          // when window width is >= 640px
          1250: {
            slidesPerView: 3.6,
            spaceBetween: 40
          }
        }
    });