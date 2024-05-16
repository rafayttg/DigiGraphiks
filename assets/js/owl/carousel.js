$('.cat-slider').owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: true,
    autoWidth: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 7
        }
    }
})

$('.ppl-cat-card').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        450: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 7
        }
    }
})

$('.product-card').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        450: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

$('.promotion').owlCarousel({
    stagePadding: 20,
    loop: true,
    margin: 10,
    autoplay: true,
    smartSpeed: 450,
    autoplayTimeout: 800,
    nav: false,
    autoWidth: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 10
        }
    }
})