var swiper = new Swiper (".mySwiper",{
    slidesPerview: 1,
grabCursor:true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});