$(document).ready(function(){
    $('.test-carousel').slick({
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed: 2000,
        // arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="./images/prev-arrow.svg" /> PREV</button>',
        nextArrow: '<button type="button" class="slick-next">NEXT<img src="./images/next-arrow.svg"/> </button>',
    });
});