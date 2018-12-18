$(function() {
    heroAnimate();
    navigate();
    secAnimate();
    $('.expand-button').click(function(){
        $(this).closest('section').next('.expanded').slideDown(300);
        $(this).hide();
        return false;
    });
    $('.expand-close').click(function(){
        $(this).closest('section').slideUp(300,function() {
            $(this).closest('section').prev('section').find('.expand-button').show();
        });
        return false;
    });

    $('.tab').click(function(){
        if(!($(this).hasClass('active'))) {
            var num = $(this).index()+1;
            $('.tab, .tab-content').removeClass('active');
            $('.tab-content:nth-child('+num+')').addClass('active');
            $(this).addClass('active');
            return false;
        }
    });
    $('.head-menu ul li.anc a').click(function(){
        if ($(window).width()<= 767) {
            $('.menu-wrap').removeClass('opened');
        }
        var link = $(this).attr('href');
        var dest = $(link).offset().top - $('.head-menu').outerHeight()+1;
        $('html').animate({'scrollTop':dest}, 1000);
        return false;
    });
    $('.mob-menu').click(function(){
        $('.menu-wrap').addClass('opened');
        return false;
    });
     $('.close').click(function(){
        $('.menu-wrap').removeClass('opened');
        return false;
    });
     $('.rules-button').click(function() {
        $('.popup-close, .overlay, .popup').fadeIn(400);
        return false;
     });
     $('.popup-close, .overlay').click(function() {
        $('.popup-close, .overlay, .popup, .video-popup').fadeOut(400);
        $('.video-popup .video-wrapper').html('');
        return false;
     });
     $('.video-block').click(function(){
        var video = $(this).data('src');
        $('.video-popup .video-wrapper').html('<iframe src="https://www.youtube.com/embed/'+video+'?wmode=opaque&enablejsapi=1&playlist=0&autohide=1&loop=0&showinfo=0&theme=dark&html5=1&rel=0&vq=hd1080&autoplay=1" frameborder="0"></iframe>');
        $('.popup-close, .overlay, .video-popup').fadeIn(400);

        return false;
     });
});

function heroAnimate() {
    // $(window).load(function() {
        if($(window).width() > 767) {
            $('.product-logo').animate({opacity:1, top:0},400, function(){
                $('.hero .content .title').animate({opacity:1, top:0},400, function(){
                    $('.hero .content .text').animate({opacity:1, top:0},400);
                });
            });
        }
    // });
}
function secAnimate() {
    $(window).on('scroll', function(event){
        if ($(window).width()> 767) {
            $('.section-wrap section').each(function(){
                if($(this).offset().top-$(window).height()*0.6 < $(window).scrollTop()) {
                    $(this).find('.content.fade, .content-text, .content-title').animate({
                        opacity:1,
                        marginTop:0
                    },400);
                }
                var self = $(this);
                if (self.hasClass('section-10')) {
                    if($(this).offset().top + $(this).height()-$(window).height()*1.2 < $(window).scrollTop()) {
                       $(this).find('.anim-in').animate({
                            opacity:1
                        },800);
                    }
                } else {
                     if($(this).offset().top + $(this).height()-$(window).height()*1.6 < $(window).scrollTop()) {
                       $(this).find('.anim-in').animate({
                            opacity:1
                        },800);
                    }
                }
            });
        }
        if($(window).scrollTop() > $('.main-header').height()) {
            $('.head-menu').addClass('fixed');
            $('.hero').css({'margin-top':$('.head-menu').outerHeight()});
        } else {
            $('.head-menu').removeClass('fixed');
            $('.hero').css({'margin-top':0});
        }
    });
}
function navigate() {
    $(window).scroll(function(){
        $('.anc').each(function() {
            var link = $(this).find('a').attr('href');
            var height = $(link).height();
            var top = $(link).offset().top ;
            if ( ( ($(window).scrollTop() + $('.head-menu').outerHeight()) >= top ) && ( ($(window).scrollTop() - height + $('.head-menu').outerHeight()) < top) ) {
                $(this).find('a').addClass('active');
            } else {
                $(this).find('a').removeClass('active');
            }
        });
    });
}
function videoHeight() {
    $('iframe').height($(window).width()*0.55);
}