$(function() {
    a2 = 1;
    $(window).scroll(function() {
        animateText();
        animateProdWidth();
        animateMotor();
        animateBattery();
        animateTestdrive
        
    });
    $(window).load(function(){
        animateBanner();
    });
    $('.reviews-slider').owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        loop: true,
        navText: ['',''],
        smartSpeed: 1000
    });
    $('.reviews-slider .owl-dot').each(function(){
        var qn = $(this).index()+1
        $(this).children('span').text('0'+qn);
    });
    if($(window).width() < 991) {
        $('.sec-5-content').owlCarousel({
            items: 2,
            dots: true,
            nav: false,
            loop: true,
            navText: ['',''],
            smartSpeed: 1000,
            margin:50,
            responsive: {
                0 : {
                    items:1,
                    margin: 0
                },
                640: {
                    items: 2,
                    margin:50,
                }
            }
        });
        $('.sec-5-content .owl-dot').each(function(){
            var qn = $(this).index()+1
            $(this).children('span').text('0'+qn);
        });
   }
    $('.list-col li').hover(function(){
        a2=1;
        clearInterval(timer);
        var n = $(this).closest('li').index()+1;
        $('.list-col li').removeClass('active');
        $('.sec3-1 .img-col img').removeClass('active');

        $(this).closest('li').addClass('active');
        $('.sec3-1 .img-col img:nth-child('+n+')').addClass('active');
        }, function() {
        a2=0;
        timer = setInterval(timerInit,5000);
    });
    timer = setInterval(timerInit,5000);
    function timerInit() {
        if( a2 !=1) {
            n2 = $('.sec3-1 li.active').index()+1;
            if (n2 == $('.sec3-1 li').length) 
                { n2 = 1; }
            else {
                n2+=1;
            }
            $('.list-col li').removeClass('active');
            $('.sec3-1 .img-col img').removeClass('active');
            $('.sec3-1  li:nth-child('+n2+')').addClass('active');
            $('.sec3-1 .img-col img:nth-child('+n2+')').addClass('active');
        }
    }
});

function animateBanner() {
    var animSpeed = 300;
    $('.baner-logo').animate({'top':0, 'opacity':1}, animSpeed, function() {
        $('.banner-text').animate({'top':0, 'opacity':1}, animSpeed, function() {
            $('.banner-button').animate({'top':0, 'opacity':1}, animSpeed);
        });
    });
}
function animateProdWidth() {
        if (($('.cord-zero-list-wrap').offset().top-$(window).height()/2) < $(window).scrollTop()) {
            $('.cord-zero-item').addClass('appeared');
            $('.cord-zero-item').each(function() {
                var elem = $(this);
                var numb_start = elem.find('span').text();
                var numb_end = elem.find('span').data('num');

                $({numberValue: numb_start}).stop().animate({numberValue: numb_end}, {
                    duration: 1000,
                    easing: "linear",
                    step: function(val) {
                        elem.find('span').html(Math.ceil(val));
                    }
                });
                var bottom = ($(this).height() - $(this).find('.prod-top').height());
                elem.find('.prod-top').stop().animate({'bottom':bottom},1000);
            });
        } else {
            $('.cord-zero-item').each(function() {
                var elem = $(this);
                var numb_start = elem.find('span').text();
                var numb_end = 0;
                $({numberValue: numb_start}).stop().animate({numberValue: numb_end}, {
                    duration: 1000,
                    easing: "linear",
                    step: function(val) {
                        elem.find('span').html(Math.ceil(val));
                    }
                });
                var bottom = $('.prod-bottom').height() - $('.prod-top').height()*0.39;
                elem.find('.prod-top').stop().animate({'bottom':bottom},1000);
            });
            $('.cord-zero-item').removeClass('appeared');
        }
}
function animateMotor() {
        if (($('.sec2-inner').offset().top-$(window).height()*0.7) < $(window).scrollTop()) {
            $('.sec2-anim').addClass('animated');
        } else {
            $('.sec2-anim').removeClass('animated');
        }
}
function animateTestdrive() {
    if (($('.testdrive-container').offset().top-$(window).height()/2) < $(window).scrollTop()) {
        $('.testdrive-text').addClass('animated');
        $('.testdrive-anim').addClass('animated');
    } else {
        $('.testdrive-text').removeClass('animated');
        $('.testdrive-anim').removeClass('animated');
    }
}
function animateText() {
    $('.animate').each(function(){
        var elem = $(this);
            if ((elem.offset().top-$(window).height()*0.7) < $(window).scrollTop()) {
                elem.addClass('animated');
            } else {
                elem.removeClass('animated');
            }
    });
}
function animateBattery() {
    
        if (($('.sec-3-inner').offset().top-$(window).height()/2) < $(window).scrollTop()) {
            $('.sec-3-img').addClass('animated');
            var numb_start = $('.sec-3-time').text();
            var numb_end = $('.sec-3-time').data('num');
            $({numberValue: numb_start}).stop().animate({numberValue: numb_end}, {
                duration: 1000,
                easing: "linear",
                step: function(val) {
                    $('.sec-3-time').html(Math.ceil(val));
                }
            });
        } else {
            $('.sec-3-img').removeClass('animated');
            var numb_start = $('.sec-3-time').text();
            var numb_end = 0;
            $({numberValue: numb_start}).stop().animate({numberValue: numb_end}, {
                duration: 1000,
                easing: "linear",
                step: function(val) {
                    $('.sec-3-time').html(Math.ceil(val));
                }
            });
        }
    
}
$('.slider').owlCarousel({
items:1,
dots: false,
loop:true,
nav:true,
navText:["",""]
});