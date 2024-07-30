(function ($) {
    'use strict';
    AOS.init();
    // typed-js
    new Typed('.type', {
        strings: ['Hi I am Aaron Yu', 'Hi I am Aaron Yu'],
        // fadeOut: true,
        // fadeOutClass:'typed-fade-out',
        // fadeOutDelay:500,
        typeSpeed: 90,
        backSpeed: 90,
        loop: true
    });

    new Typed('.types', {
        strings: ['Front End Developer',
            'Full Stack Developer',
            'iOS Developer'],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    });


    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

    // testimonial Active
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplayTimeout: 5000,
        dots: false,
        nav: false,
        margin: 30,
        transitionStyle: "fade",
        navText: ["<i class='bi bi-arrow-right''></i>", "<i class='bi bi-arrow-left''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            }
            // ,
            // 1920: {
            //     items: 2
            // }
        }
    })

    /*---------------------
        WOW active js 
        --------------------- */
    new WOW().init();

    // <!--barfiller script -->
    $(document).ready(function () {
        function updateBars(durations) {
            for (var i = 1; i <= durations.length; i++) {
                $("#bar" + i).barfiller({ duration: durations[i - 1] });
            }
        }

        function isElementInViewport(elem) {
            var $elem = $(elem);
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.height();
            return elemBottom >= viewportTop && elemTop <= viewportBottom;
        }

        $(window).on("scroll", function () {
            if (isElementInViewport(".prossess-bar-plugin")) {
                updateBars([3000, 3200, 3400, 3000, 3800, 4000, 3000, 3200, 3400, 3600, 3800, 4000, 3000, 3200, 3400, 3600]);
            }
        });

        $(".active").click(function () {
            updateBars([3000, 3200, 3400, 3000, 3800, 4000, 3000, 3200, 3400, 3600, 3800, 4000, 3000, 3200, 3400, 3600]);
        });
    });

    //
    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
    });

    $('.go-top').on('click', function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 200);
    });


    $(document).ready(function () {
        $('#blognodejs').on('shown.bs.modal', function (e) {
            var video = document.getElementById('blogvideoPlayer');
            if (video) {
                video.play();
            }
        });

        $('#blognodejs').on('hidden.bs.modal', function (e) {
            var video = document.getElementById('blogvideoPlayer');
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });


        $('#watchGallery').on('shown.bs.modal', function (e) {
            var video = document.getElementById('watchvideoPlayer');
            if (video) {
                video.play();
            }
        });

        $('#watchGallery').on('hidden.bs.modal', function (e) {
            var video = document.getElementById('watchvideoPlayer');
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });

    });

    $(document).ready(function () {
        let isDragging = false;
        let startPosition = 0;
        let endPosition = 0;

        $('.carousel-inner').on('mousedown touchstart', function (event) {
            isDragging = true;
            startPosition = event.pageX || event.originalEvent.touches[0].pageX;
            $(this).css('cursor', 'grabbing');
            event.preventDefault();
        });

        $(document).on('mousemove touchmove', function (event) {
            if (isDragging) {
                endPosition = event.pageX || event.originalEvent.touches[0].pageX;
                event.preventDefault();
            }
        });

        $(document).on('mouseup touchend', function () {
            if (isDragging) {
                isDragging = false;
                $('.carousel-inner').css('cursor', 'grab');

                if (startPosition - endPosition > 50) {
                    $('#iOSPicsCarousel').carousel('next');
                } else if (startPosition - endPosition < -50) {
                    $('#iOSPicsCarousel').carousel('prev');
                }
            }
        });

        var carousel = new bootstrap.Carousel(document.getElementById('iOSPicsCarousel'), {
            wrap: false
        });
    })

})(jQuery);


