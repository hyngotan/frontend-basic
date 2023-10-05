//Owl Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3500,
    autoplaySpeed:1500,
    autoplayHoverPause:false,
    center:false,
    dotsSpeed: 1500,
    mouseDrag:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})