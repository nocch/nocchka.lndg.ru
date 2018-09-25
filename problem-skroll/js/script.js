$(function(){
    window.scrollTo(0, 0);

    block_wrp_id = 0;
    anim=0;
    rotate = 0;
    rotate2 = 0;
    rotateFlag=0;
    sliderOp=0;
    opSOld = 0;

    appear();
    titleAnim();
    tshirtAnimWidth();
    tshirtAnim();
    $('.drum-slider').owlCarousel({
        items:1,
        loop: true,
        dots: false,
        lazyLoad:true,
        nav: true,
        navText: ["",""]
    });
    
    $('.drum-slider').on('changed.owl.carousel', function (e) {
        rotate = rotate+360;
        rotate2 = rotate2+720;
        $('.drum-1').css({transform:'rotate('+rotate+'deg)'});
        $('.drum-2').css({transform:'rotate('+rotate2+'deg)'});
    });
    owlInit();
    getWtb();
    $('.wtb-popup-top-button').click(function(){
        $('.wtb-popup-top').css({'z-index':2}).animate({opacity:1},300);
        return false;
    });
    $('.wtb-popup-bottom-button').click(function(){
        $('.wtb-popup-bottom').css({'z-index':2}).animate({opacity:1},300);
        return false;
    });
    $('.wtb-popup-close ').click(function(){
        var elem = $(this);
        elem.closest('.wtb-popup').animate({opacity:0},300, function(){
            elem.closest('.wtb-popup').css({'z-index':'-1'});
        })
        return false;
    });
    $(window).load(function(){
        window.scrollTo(0, 0);
        circleSlider();
        wBeginWm = $('.wm-circle').width();
        wEndWm = $('.product-image-block img').width()*0.89;
        destWm = $('.product-image-block img').offset().top + $('.product-image-block img').height()*0.12 -200;
        stepWm = (wEndWm- wBeginWm)/destWm;
        
        stepTopWm = ($('.product-image-block img').offset().top + $('.product-image-block img').height()*0.12 - $('.wm-circle').offset().top)/destWm;
        // topBeginWm = $('.wm-circle').offset().top;
        logoLeft = ($(window).width()*0.9 - $('.main-block-top .main-block-top-content .twinwash-logo').width())/2;
        $('.main-block-top .main-block-top-content .twinwash-logo').animate({opacity:1},500);
        $('.main-block-top .main-block-top-content .twinwash-logo').css({left:logoLeft});
        wBegin = $('.point-in').width();
        wEnd = $('.point').width();
        dest = $('.point').offset().top + $('.point').width()/2 - $('.drum-section').offset().top;
        step = wEnd/dest;
        stepTop = ($('.point').offset().top - $('.point-in').offset().top)/dest;
        t1 = $('.product-image-block img').height()*0.4157;
        $('.wm-circle').css({top:t1})

        wBeginS = $('.slider-point').width();
        wEndS = $('.prod-img-slider-top .active img').width();
        destS =  $(window).height()/2;
        stepS = (wEndS)/destS;

        t = $('.prod-list-block .prod-block-top .prod-item').height()*0.416+ parseInt($('.prod-list-block .prod-block-top .prod-item').css('padding-top'));
        $('.slider-point').css({top:t});

        var spaceL =  $('.product-image-block>img').width();
        $('.rotate-wrap').width(spaceL);
        // mLeft = $('.product-image-block').offset().left;
        // $('.main-block-bottom .product-image-block-bottom').css({'margin-left':mLeft});
        $(document).on('mousewheel',function(event){
            if($(window).width() > 767) {
                firstblockAnim();
            }
            if(event.deltaY ==-1) {
                // if(( ($(document).scrollTop() -$(window).height()/2) > $('.point').offset().top) && (($(document).scrollTop() -$(window).height()/2) < ($('.point').offset().top) + 300)) {
                if(( ($(document).scrollTop()) > $('.drum-slider-wrap').offset().top) && (($(document).scrollTop() -$(window).height()) < ($('.drum-slider-wrap').offset().top))) {
                    if(rotateFlag ==0 ) {
                        rotateFlag=1;
                        rotate = rotate+360;
                        rotate2 = rotate2+720;
                        $('.drum-1').css({transform:'rotate('+rotate+'deg)'});
                        $('.drum-2').css({transform:'rotate('+rotate2+'deg)'});
                    }
                } else {
                    rotateFlag=0;

                }
            }
        });
        $(document).on('scroll',function(){
             if($(window).width() > 767) {
                pointAnim();
                sliderCircleAnim();
                firstblockAnim();
                lastBlockAnim();
            }
        });
        mobileAnim();
    });
});



function circleSlider() {
    var content = $('.circle-slider-inner').html(),
        contentBottom = $('.circle-slider-inner-bottom').html();
    //$('.circle-slider-inner').append(content).prepend(content).prepend(content);
    //$('.circle-slider-inner-bottom').prepend(contentBottom).prepend(contentBottom).prepend(contentBottom);
    $('.circle-slider-inner').append(content).prepend(content);
    $('.circle-slider-inner-bottom').prepend(contentBottom).prepend(contentBottom);

    var radius = $('.circle-slider-wrap').width(),
        qn = $('.circle-item').length,
        deg = 360 / qn,
        sliderRotate = 0;

    $(window).resize(function(){
        radius = $('.circle-slider-wrap').width();
        circkeSliderInit(radius,qn,deg,sliderRotate);
    });
    
    circkeSliderInit(radius,qn,deg,sliderRotate);

    $('.circle-prev').click(function(){
        $('.circle-item').each(function(){
            var curRot = $(this).data('rot'),
                newRot = curRot -deg;
            $(this).css({'transform':'rotate('+newRot+'deg) translateX('+radius+'px) rotate(-90deg)'});
            $(this).data('rot',newRot);
        });
        $('.circle-item-bottom').each(function(){
            var curRot = $(this).data('rot'),
                newRot = curRot + deg;
            $(this).css({'transform':'rotate('+newRot+'deg) translateX('+radius+'px) rotate(90deg)'});
            $(this).data('rot',newRot);
        });
    });

    $('.circle-next').click(function(){
        $('.circle-item').each(function(){
            var curRot = $(this).data('rot'),
                newRot = curRot + deg;
            $(this).css({'transform':'rotate('+newRot+'deg) translateX('+radius+'px) rotate(-90deg)'});
            $(this).data('rot',newRot);
        });
        $('.circle-item-bottom').each(function(){
            var curRot = $(this).data('rot'),
                newRot = curRot - deg;
            $(this).css({'transform':'rotate('+newRot+'deg) translateX('+radius+'px) rotate(90deg)'});
            $(this).data('rot',newRot);
        });
    });
    fl=0;
    $(window).on('mousewheel', function(event) {
        if((fl == 0) &&(event.deltaY == -1) && ($(window).scrollTop() < ($('.circle-slider-bottom').offset().top-$(window).height()*0.5)) && ($(window).scrollTop() > ($('.main-block-bottom').offset().top+$(window).height()/2))) {
            $('.circle-next').trigger('click');
            fl=1;
            setTimeout(function(){fl=0;},600);
        }
    });
}

function circkeSliderInit(radius,qn,deg,sliderRotate) {
    $('.circle-slider,.circle-slider-inner').height($('.circle-item').height()*1.5);
    $('.circle-slider-bottom,.circle-slider-inner-bottom').height($('.circle-item-bottom').height()*2.7);
    $('.circle-slider-inner').css({'transform':'translate('+(radius/2 - $('.circle-item').width()/2)+'px,'+(-radius*0.932 + $('.circle-item').height()*0.23)+'px)'});
    for(var i=0; i<qn; i++) {
        var rot = deg*i-90;
        $('.circle-item:nth-child('+(i+1)+')').css({'transform':'rotate('+rot+'deg) translateX('+radius+'px) rotate(-90deg)'});
        $('.circle-item:nth-child('+(i+1)+')').attr('data-rot',rot);
    }
    $('.circle-slider-inner-bottom').css({'transform':'translate('+(radius/2- $('.circle-item-bottom').width()/2)+'px,'+(radius)+'px)'});
    for(var i=0; i<qn; i++) {
        var rot = deg*i-90;
        $('.circle-item-bottom:nth-child('+(i+1)+')').css({'transform':'rotate('+rot+'deg) translateX('+radius+'px) rotate(90deg)'});
        $('.circle-item-bottom:nth-child('+(i+1)+')').attr('data-rot',rot);
    }
}

function tshirtAnimWidth() {
    $('.t-shirt-anim').height($('.t-shirt-anim').width()*0.5464);
}
function tshirtAnim() {
        $('.t-shirt-anim').height($('.t-shirt-anim').width()*0.5464);

        var dest = $('.t-shirt-anim').height()/2/18,
            scroll = 0;
    $(window).scroll(function(){
        if( ($(window).scrollTop() > $('.t-shirt-anim').offset().top - $(window).height()*0.5) &&  ($(window).scrollTop() < ($('.t-shirt-anim').offset().top) + $('.t-shirt-anim').height()/2 - $(window).height()*0.5)) {
            var scroll = $(window).scrollTop() - $('.t-shirt-anim').offset().top + $(window).height()*0.5,
                qn = Math.round(scroll/dest),
                pos = 100/18*qn +'%';
            $('.t-shirt-anim').css({'background-position':'0 '+pos });
        } else if ($(window).scrollTop() < $('.t-shirt-anim').offset().top - $(window).height()*0.5) {
            $('.t-shirt-anim').css({'background-position':'0 0'});
        // } else if ($(window).scrollTop() <= ($('.t-shirt-anim').offset().top) + $('.t-shirt-anim').height()/2 - $(window).height()*0.5) {
        } else {
            $('.t-shirt-anim').css({'background-position':'0 100%'});
        }
    });
}

function owlInit() {
var models = [

    {model:"aaaaa",linkWtb:"",linkMore:"", drumModel:"aaaaa", drumLink:"", drumWtb:"",bullits:["aaaaaa"],drumBullits:["aaaaaaa"]},
       {model:"aaaaa",linkWtb:"",linkMore:"", drumModel:"aaaaa", drumLink:"", drumWtb:"",bullits:["aaaaaa"],drumBullits:["aaaaaaa"]},    {model:"aaaaa",linkWtb:"",linkMore:"", drumModel:"aaaaa", drumLink:"", drumWtb:"",bullits:["aaaaaa"],drumBullits:["aaaaaaa"]},    {model:"aaaaa",linkWtb:"",linkMore:"", drumModel:"aaaaa", drumLink:"", drumWtb:"",bullits:["aaaaaa"],drumBullits:["aaaaaaa"]},    {model:"aaaaa",linkWtb:"",linkMore:"", drumModel:"aaaaa", drumLink:"", drumWtb:"",bullits:["aaaaaa"],drumBullits:["aaaaaaa"]},    {model:"aaaaa",linkWtb:"",linkMore:"", drumModel:"aaaaa", drumLink:"", drumWtb:"",bullits:["aaaaaa"],drumBullits:["aaaaaaa"]},    {model:"aaaaa",linkWtb:"",linkMore:"", drumModel:"aaaaa", drumLink:"", drumWtb:"",bullits:["aaaaaa"],drumBullits:["aaaaaaa"]},    {model:"aaaaa",linkWtb:"",linkMore:"", drumModel:"aaaaa", drumLink:"", drumWtb:"",bullits:["aaaaaa"],drumBullits:["aaaaaaa"]},    {model:"aaaaa",linkWtb:"",linkMore:"", drumModel:"aaaaa", drumLink:"", drumWtb:"",bullits:["aaaaaa"],drumBullits:["aaaaaaa"]},    {model:"aaaaa",linkWtb:"",linkMore:"", drumModel:"aaaaa", drumLink:"", drumWtb:"",bullits:["aaaaaa"],drumBullits:["aaaaaaa"]},    {model:"aaaaa",linkWtb:"",linkMore:"", drumModel:"aaaaa", drumLink:"", drumWtb:"",bullits:["aaaaaa"],drumBullits:["aaaaaaa"]},    {model:"aaaaa",linkWtb:"",linkMore:"", drumModel:"aaaaa", drumLink:"", drumWtb:"",bullits:["aaaaaa"],drumBullits:["aaaaaaa"]},    {model:"aaaaa",linkWtb:"",linkMore:"", drumModel:"aaaaa", drumLink:"", drumWtb:"",bullits:["aaaaaa"],drumBullits:["aaaaaaa"]},    {model:"aaaaa",linkWtb:"",linkMore:"", drumModel:"aaaaa", drumLink:"", drumWtb:"",bullits:["aaaaaa"],drumBullits:["aaaaaaa"]}
]
var $sync1 = $('.prod-img-slider-top'),
    $sync2 = $('.prod-img-slider-bottom'),
    flag = false,
    duration = 300;

$sync1
    .owlCarousel({
        items:1,
        dots:false,
        nav:true,
        navText: ["",""],
        lazyLoad: true,
        animateOut:'fadeOutUp',
        animateIn:'fadeInDown',
        responsive: {
            0:{
                mouseDrag:true,
                animateOut:'fadeOut',
                animateIn:'fadeIn',
            },
            767 : {
                mouseDrag:false,
                animateOut:'fadeOutUp',
                animateIn:'fadeInDown',
            }
        }
    })
    .on('changed.owl.carousel', function (e) {
        if (!flag) {
            flag = true;
            setTimeout(function(){
                getWtb();
                var model = parseInt($('.prod-img-slider-top .owl-item.active .prod-item').data('model'));
                    link = models[model].linkMore,
                    wtb = models[model].linkWtb,
                    drumLink = models[model].drumLink,
                    modelWm = models[model].model,
                    drumModel = models[model].drumModel,
                    drumWtb =models[model].drumWtb;
                    $('.prod-block-top .lg-button , .model-top .lg-button').attr('href', wtb);
                    $('.prod-block-top .tech').attr('href', link);
                    $('.prod-block-bottom .lg-button, .model-bottom .lg-button').attr('href', drumWtb);
                    $('.prod-block-bottom .tech').attr('href', drumLink);
                    $('.model, .bullets ul').animate({opacity:0},200, function(){
                        $('.bullets ul').html("");
                        for(var i=0;i<models[model].bullits.length;i++){
                            $('.prod-block-top .bullets ul').append('<li>'+models[model].bullits[i]+'</li>')
                        }
                        for(var j=0;j<models[model].drumBullits.length;j++){
                            $('.prod-block-bottom .bullets ul').append('<li>'+models[model].drumBullits[j]+'</li>')
                        }
                        $('.prod-block-top .model, .model-top .model').html(modelWm);
                        $('.prod-block-bottom .model, .model-bottom .model').html(drumModel);
                        $('.model, .bullets ul').animate({opacity:1},200);
                    });
            },50);
            $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
            flag = false;
        }
    });

$sync2
    .owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        animateOut:'fadeOutDown',
        animateIn:'fadeInUp',
        responsive: {
            0:{
                mouseDrag:true,
                animateOut:'fadeOut',
                animateIn:'fadeIn',
            },
            767 : {
                mouseDrag:false,
                animateOut:'fadeOutDown',
                animateIn:'fadeInUp'
            }
        }
    })
    .on('click', '.owl-item', function () {
        $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

    })
    .on('changed.owl.carousel', function (e) {
        if (!flag) {
            flag = true;
            getWtb();
            setTimeout(function(){
                var model = parseInt($('.prod-img-slider-top .owl-item.active .prod-item').data('model'));
                    link = models[model].linkMore,
                    wtb = models[model].linkWtb,
                    drumLink = models[model].drumLink,
                    modelWm = models[model].model,
                    drumModel = models[model].drumModel,
                    drumWtb =models[model].drumWtb;
                    $('.prod-block-top .lg-button').attr('href', wtb);
                    $('.prod-block-top .tech').attr('href', link);
                    $('.prod-block-bottom .lg-button').attr('href', drumWtb);
                    $('.prod-block-bottom .tech').attr('href', drumLink);
                    $('.model, .bullets ul').animate({opacity:0},200, function(){
                        $('.bullets ul').html("");
                        for(var i=0;i<models[model].bullits.length;i++){
                            $('.prod-block-top .bullets ul').append('<li>'+models[model].bullits[i]+'</li>')
                        }
                        for(var j=0;j<models[model].drumBullits.length;j++){
                            $('.prod-block-bottom .bullets ul').append('<li>'+models[model].drumBullits[j]+'</li>')
                        }
                        $('.prod-block-top .model, .model-top .model').html(modelWm);
                        $('.prod-block-bottom .model, .model-bottom .model').html(drumModel);
                        $('.model, .bullets ul').animate({opacity:1},200);
                    });
            },50);
            $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
            flag = false;
        }
    });
var $sync3 = $('.prod-img-slider-top-main'),
    $sync4 = $('.prod-img-slider-bottom-main'),
    flag = false,
    duration = 300;

$sync3
    .owlCarousel({
        items:1,
        dots:false,
        nav:true,
        animateOut:'fadeOut',
        animateIn:'fadeIn',
        navText: ["",""]
    })
    .on('changed.owl.carousel', function (e) {
        if (!flag) {
            flag = true;
            setTimeout(function(){
                var model = parseInt($('.prod-img-slider-top-main .owl-item.active .prod-item').data('model'));
                    modelWm = models[model].model,
                    drumModel = models[model].drumModel,
                    $('.model').animate({opacity:0},200, function(){
                        $('.model-top-main .model').html(modelWm);
                        $('.model-bottom-main .model').html(drumModel);
                        $('.model').animate({opacity:1},200);
                    });
            },50);
            $sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
            flag = false;
        }
    });

$sync4
    .owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        animateOut:'fadeOut',
        animateIn:'fadeIn'
    })
    .on('click', '.owl-item', function () {
        $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

    })
    .on('changed.owl.carousel', function (e) {
        if (!flag) {
            flag = true;
            setTimeout(function(){
                var model = parseInt($('.prod-img-slider-top-main .owl-item.active .prod-item').data('model'));
                    modelWm = models[model].model,
                    drumModel = models[model].drumModel,
                    $('.model').animate({opacity:0},200, function(){
                        $('.model-top-main .model').html(modelWm);
                        $('.model-bottom-main .model').html(drumModel);
                        $('.model').animate({opacity:1},200);
                    });
            },50);
            $sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
            flag = false;
        }
    });
}

function pointAnim() {

    if ($(document).scrollTop() > ($('.main-block-bottom').offset().top ) ) {
        var tr = ($(document).scrollTop() - $('.main-block-bottom').offset().top)/3,
            zoom = 1-tr/$(window).height();
        $('.main-block-bottom .circle').css({transform:'translateY(-'+tr/15+'px) scale('+zoom+')'});
        $('.main-block-bottom .arrow-down img').css({transform:'translateY(-'+tr/2+'px)'});
    }
    if ($(document).scrollTop() > ($('.video-section').offset().top - $(window).height()*1.7 ) ) {
        var tr1 = ($(document).scrollTop() - ($('.video-section').offset().top -$(window).height()*1.7))/3,
            zoom1 = 1-tr1/$(window).height();
        $('.point').css({transform:'translateY(-'+tr1/15+'px) scale('+zoom1+')'});
        $('.drum-section .arrow-down img').css({transform:'translateY(-'+tr1/15+'px)'});
    }


    if( (($(document).scrollTop() + $(window).height()) > $('.drum-section').offset().top) && ( (($(document).scrollTop() + $(window).height())  < $('.point').offset().top + $('.point').width()/2) ) ) {
        topOffset = (($(document).scrollTop() + $(window).height())  - $('.drum-section').offset().top)*stepTop;
        width = (($(document).scrollTop() + $(window).height())  - $('.drum-section').offset().top)*step;
    
        $('.point-in').css({width:width,height:width,top:topOffset});
        $('.point').css({opacity:0});
    } else if (($(document).scrollTop() + $(window).height())  > $('.drum-section').offset().top) {
        $('.point-in').css({width:'1px',height:'1px',top:0});
        $('.point').css({opacity:1});
    }
    if(($(document).scrollTop() > $('.point').offset().top) && ($(document).scrollTop() < ($('.point').offset().top) + 300)) {

        var op = ($(document).scrollTop() - $('.point').offset().top)/300;
        $('.drum-slider-wrap').css({opacity:op});
    } else if ($(document).scrollTop() < $('.point').offset().top) {
        $('.drum-slider-wrap').css({opacity:0});
    } else {
        $('.drum-slider-wrap').css({opacity:1});
    }
    



  
}
function sliderCircleAnim() {
    
    if(($(document).scrollTop() + $(window).height()/2) > $('.prod-list-block').offset().top) {
        wP =  (($(document).scrollTop() + $(window).height()/2)  - $('.prod-list-block').offset().top)*stepS;
        if (wP > $('.prod-img-slider-top .active img').width()*0.9) {
            wP = $('.prod-img-slider-top .active img').width()*0.9;
        }
        opS = ($(document).scrollTop()+$(window).height()/2 - $('.prod-img-slider-top').offset().top)/300;
        if (opS > opSOld) {
            opSOld = opS;
        }
        if (opSOld >1.7) {
            sliderOp = 1.7;
            $('.slider-point').css({opacity:0});
            $('.prod-img-slider-top').css({opacity:1});

        }
        if (sliderOp == 0) {
            $('.prod-img-slider-top').css({opacity:opSOld-0.7});
            $('.slider-point').css({opacity:1.7-opSOld});
            $('.slider-point').css({width:wP,height:wP});
        }

    }
}

function animeSlide() {
    var block = $('.circle-item').eq(block_wrp_id);
    if (block !=="undefined") {
        $(block).addClass('view')
        setTimeout(function() {
            block_wrp_id += 1;
            animeSlide();
        },300);
    }
    var blockBottom = $('.circle-item-bottom').eq(block_wrp_id);
    if (blockBottom !=="undefined") {
        $(blockBottom).addClass('view')
        setTimeout(function() {
            block_wrp_id += 1;
            animeSlide();
        },300);
    }
}
function appear(){
    if($(window).width() > 767){
        var offset = $(window).height()*0.5;
        ks=1.15;
        k=2;
    } else {
        var offset = $(window).height()*0.4;
        ks=1.05;
        k=4;
    }
    $('.appear').wrap( "<div class='appear-wrap'></div>" );
    $('.appear-wrap').css({transform:'translateY('+offset/k+'px)'});
    $(window).scroll(function(){
        $('.appear-wrap').each(function(){
            var elem = $(this);
            if((($(window).scrollTop()+$(window).height()*ks) > elem.offset().top) && (($(window).scrollTop()+$(window).height()*ks) < (elem.offset().top + offset) ) ) {
                var offsetNew = offset - (($(window).scrollTop()+$(window).height()*ks) - elem.offset().top);
                elem.css({transform:'translateY('+offsetNew/k+'px)'});
            } else if ( ($(window).scrollTop()+$(window).height()*ks) >= (elem.offset().top + offset) ) {
                elem.css({transform:'translateY(0px)'});
            }
        })
    });
}
function titleAnim(){
    // if($(window).width() > 767){
        var offset1 = $(window).height()*0.4;
        ks1=0.5;
        $('.title-anim').wrap( "<div class='title-anim-wrap'></div>" );
        $('.title-anim').css({transform:'translateY('+offset1/5+'px)'});

        $(window).scroll(function(){
            $('.title-anim-wrap').each(function(){
                var elem1 = $(this);
                if((($(window).scrollTop()+$(window).height()*ks1) > elem1.offset().top) && (($(window).scrollTop()+$(window).height()*ks1) < (elem1.offset().top + offset1) ) ) {
                    var offsetNew1 =  -(($(window).scrollTop()+$(window).height()*ks1) - elem1.offset().top);
                    elem1.css({transform:'translateY('+offsetNew1/5+'px)'});
                // } else if ( ($(window).scrollTop()+$(window).height()*ks) >= (elem.offset().top + offset) ) {
                //     elem.css({transform:'translateY(0px)'});
                }
            })
        });
    // }
}
function mobileAnim() {
    if($(window).width()<768) {
        scroll = 0;
        var margin =  $(window).height() - $('.main-header').height() - $('.main-block .twinwash-logo').height() - parseInt($('.main-block .twinwash-logo').css('margin-top')) - parseInt($('.main-block .twinwash-logo').css('margin-bottom')) - $('.prod-block-top').height()*0.3 - $('.main-block .main-title').height() - parseInt($('.main-block .main-title').css('margin-bottom')) - $('.model-top-main').height() - parseInt($('.model-top-main').css('margin-bottom'));
        $('.model-top-main').css({'margin-top':margin});

        $('body').on('click touch',function(){
        scroll = 1;
            $('.main-block .twinwash-logo, .arrow-top').animate({opacity:0},200,function(){
                $('.arrow-top').hide();
                $('.main-block .twinwash-logo').animate({height:0,margin:0},200, function(){
                    $('.model-top-main').animate({'margin-top':'4vw'},200);
                    $('.model-top-main ,.main-block .owl-nav').animate({opacity:1},200);
                    $('body').removeClass('fixed');
                });
            });
        });
    }
}
function lastBlockAnim(){
    var end = $('.prod-block-bottom').offset().top - $('.last-block-anim-wrap').height() - $('.last-block-anim-wrap').offset().top - 50;
    if(($(window).scrollTop() > ($('.prod-list-block .img-title').offset().top + $('.prod-list-block .img-title').height() ) ) /*&& (($(window).scrollTop() +$(window).height()*1.1)< $('footer').offset().top+100)*/) {
        var trB = $(document).scrollTop() - ($('.prod-list-block .img-title').offset().top + $('.prod-list-block .img-title').height() );
        if(trB > end) {
            trB1 = end;
        } else {
            trB1 = trB
        }
        $('.last-block-anim, .prod-list-block .owl-nav').css({transform:'translateY('+trB1+'px)'})
    }
    var end1 = $('.product-image-block').offset().top + $('.product-image-block').height() - $('.main-block-top-text-wrap').height() - $('.main-block-top-text-wrap').offset().top - 50;
    if(($(window).scrollTop() > ($('.twinwash-logo').offset().top + $('.twinwash-logo').height() ) ) && ($(window).scrollTop() < $('.main-block-bottom').offset().top)) {
        var trB2 = $(document).scrollTop() - ($('.twinwash-logo').offset().top + $('.twinwash-logo').height());
        if(trB2 > end1) {
            trB3 = end1;
        } else {
            trB3 = trB2;
        }
        $('.main-block-top-text').css({transform:'translateY('+trB3+'px)'});
    }
    if ($(window).scrollTop() < $('.main-block-bottom').offset().top) {
        var rotate = $(window).scrollTop();
        $('.rotate').css({'transform':'rotate('+rotate+'deg)'});
        $('.rotate-2').css({'transform':'rotate('+rotate*2+'deg)'});
    }
}
function firstblockAnim(){
    if(anim == 0) {
        speed=600;
        $('.main-block-top .main-block-top-content .twinwash-logo').animate({left:0},speed);
        $('.first-screen').animate({opacity:0},speed);
        $('.wm-circle').animate({width:wEndWm*1.01, height:wEndWm*1.05}, speed*0.8, function(){
            $('.main-block-top-text').animate({top:0,'line-height':'1em'},speed*1.2);
            $('.main-drum, .rotate, .rotate-2').animate({opacity:1},speed, function(){
                $('.main-block-top-content').animate({'margin-top':'5vw'},speed)
                $('.product-image-block>img').animate({opacity:1},speed, function(){
                    $('body').removeClass('fixed');
                    $('.wm-circle').hide();
                    anim=1;
                });
            })
        });
    }
    
}
function getWtb() {
    var offTop = $('.prod-list-block .cont-col .img-title').height()+ parseInt($('.prod-list-block .cont-col .img-title').css('margin-top')) + parseInt($('.prod-list-block .cont-col .img-title').css('margin-bottom'));
    $('.wtb-popup').css({'z-index':'-1', opacity:0});
var models = [
    {model:"FH6G1BCH2N",mpn:"FH6G1BCH2N.ABWPCOM", mpnDrum:"TW202W.ABWPCOM", drumModel:"TW202W"},
    {model:"FH6G1BCH6N",mpn:"FH6G1BCH6N.ASSPCOM", mpnDrum:"TW206W.ASSPCOM", drumModel:"TW206W"},
    {model:"FH495BDS2",mpn:"FH495BDS2.ABWPCOM", mpnDrum:"TW202W.ABWPCOM", drumModel:"TW202W"},
    {model:"FH495BDS6",mpn:"FH495BDS6.AESPCOM", mpnDrum:"TW206W.ASSPCOM", drumModel:"TW206W"},
    {model:"FH695BDH6N",mpn:"FH695BDH6N.AESPCOM", mpnDrum:"TW206W.ASSPCOM", drumModel:"TW206W"},
    {model:"F1K2CH2T",mpn:"F1K2CH2T.AESPCOM", mpnDrum:"TW351W.ASSPCOM", drumModel:"TW351W"},
    {model:"TW7000DS",mpn:"TW7000DS.ASSPCOM", mpnDrum:"TW351W.ASSPCOM", drumModel:"TW351W"},
    {model:"FH4G1JCH2N",mpn:"FH4G1JCH2N.ASSPCOM", mpnDrum:"TW202W.ASSPCOM", drumModel:"TW202W"},
    {model:"TW4J8JH2W",mpn:"TW4J8JH2W.ASSPCOM", mpnDrum:"TW202W.ASSPCOM", drumModel:"TW202W"},
    {model:"TW4J7VS2W",mpn:"TW4J7VS2W.ASSPCOM", mpnDrum:"TW202W.ASSPCOM", drumModel:"TW202W"},
]
    $('.wtb-popup-content').html('');
    var model = parseInt($('.prod-img-slider-top .owl-item.active .prod-item').data('model'));
        BU = 52751,
        mpn = models[model].mpn,
        mpnDrum = models[model].mpnDrum;

    });

    });
}