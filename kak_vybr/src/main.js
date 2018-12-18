$(document).ready(function(){
	isMobile();
	setSliders();

	$('.arrow-bottom-1').click(function(){
	var destination2 = $('.nav-menu').offset().top;
	$('html:not(:animated),body:not(:animated)').animate({scrollTop: destination2}, 500);
	return false;

	})
	$('.nav-menu li a').click(function(){
		var sec = $(this).attr('href');
		var destination = $(sec).offset().top;
		$('html:not(:animated),body:not(:animated)').animate({scrollTop: destination}, 500);
		return false;
	})
	$('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true,
        closeBtnInside:true, 
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        alignTop:true,
  		fixedContentPos: true
    });
});
	// init();

	

var init = function(){

	// getArticleNumber();

	// arrowTopClick();

	// arrowBotClick();

	// showRightMenu();

	// hideRightMenu();

	// scrollFromMenu();
}
var diagonals = [32, 43, 49, 55, 60, 65, 75, 77, 86];
var widthUrls = ['#png32', '#png43', '#png49', '#png55', '#png60','#png65', '#png75', '#png77', '#png86'];
var widthMobUrls = ['#png32', '#png43', '#png49', '#png55', '#png60','#png65', '#png75', '#png77', '#png86'];
var widths = [71, 96, 109, 122, 133, 144, 166, 170, 190];
var heights = [40, 54, 61, 69, 75, 81, 93, 100, 107];

var from = [160, 215, 245, 275, 300, 325, 375, 385, 430];
var count = [5, 14, 8, 15, 30, 11, 1, 2, 1]

var setSliders = function(){
	var valCount = diagonals.length - 1;
	$( ".slider-diag" ).slider();
	$( ".slider-width" ).slider();
	$( ".slider-height" ).slider();
    $( ".slider-from" ).slider();

	$(function() {
        $( ".slider-from" ).slider({
            range: "min",
            value: 420,
            min: 120,
            max: 420,
            slide: function( event, ui ) {
                var value = getNearest(ui.value, 'from');
                setSlidersValues(value);
            }
        });

	    $( ".slider-diag" ).slider({
	    	range: "min",
	    	value: 4,
	      	min: 0,
	      	max: valCount,
		    slide: function( event, ui ) {
		    	var value = ui.value;
		    	setSlidersValues(value);
		    }
	    });
		setSlidersValues($( ".slider-diag" ).slider( "value" ));

	    $( ".slider-width" ).slider({
	    	range: "min",
	    	value: widths[3],
	      	min: widths[0],
	      	max: widths[valCount],
		    slide: function( event, ui ) {
		    	if(ui.value < 54){
		    		return false;
		    	}
		    	var value = getNearest(ui.value, 'widths');
		    	setSlidersValues(value);			
		    }
	    });
		setSlidersValues(getNearest($( ".slider-width" ).slider( "value" ),'widths'));

	    $( ".slider-height" ).slider({
	    	range: "min",
	    	value: heights[3],
	    	min: heights[0],
	      	max: heights[valCount],
		    slide: function( event, ui ) {
		    	if(ui.value < 30){
		    		return false;
		    	}
		    	var value = getNearest(ui.value, 'heights');
		    	setSlidersValues(value);
		    }
	    });
		setSlidersValues(getNearest($( ".slider-height" ).slider( "value" ), 'heights'));

		$( ".oled-slider" ).slider({
	    	range: "min",
	    	value: 73,
	      	min: 0,
	      	max: $('.oled-slider-wrap').width(),
		    slide: function( event, ui ) {
		    	$(".bad-oled-cont").css({width: ui.value});
		    	$(".section-4 .white-line").css({left: ui.value + 4});
		    }
	    });
		$(".bad-oled-cont").css({width: $( ".oled-slider" ).slider( "value" )});
		$(".section-4 .white-line").css({left: $( ".oled-slider" ).slider( "value" ) + 4});




		$( ".hdr-slider" ).slider({
			range: "min",
			value: $('.hdr-slider-wrap').width()/2,
			min: 0,
			max: $('.hdr-slider-wrap').width(),
			slide: function( event, ui ) {
				$(".bad-hdr-cont").css({width: ui.value});
				$('.hdr-default, .hdr, .hdr-slider-wrap .disclamer').fadeOut(300);
				$(".hdr-tv-block .white-line").css({left: ui.value + 4});
			}
		});
		$(".bad-hdr-cont").css({width: $( ".hdr-slider" ).slider( "value" )});
		$(".hdr-tv-block .white-line").css({left: $( ".hdr-slider" ).slider( "value" ) + 4});



		$( ".pmi-slider" ).slider({
			range: "min",
			value: $('.pmi-slider-wrap').width()/2,
			min: 0,
			max: $('.pmi-slider-wrap').width(),
			slide: function( event, ui ) {
				$(".bad-pmi-cont").css({width: ui.value});
				$('.pmi, .nopmi').fadeOut(300);

				$(".pmi-tv .white-line").css({left: ui.value + 4});
			}
		});
		$(".bad-pmi-cont").css({width: $( ".pmi-slider" ).slider( "value" )});
		// $(".section-pmi .white-line").css({left: $( ".pmi-slider" ).slider( "value" ) + 4});
		$(".pmi-tv .white-line").css({left: $( ".pmi-slider" ).slider( "value" ) + 4});

	});
	
    $(window).bind('resize', function() {
    	isMobile()
        $( ".oled-slider" )
            .slider('destroy')
            .slider({
                range: "min",
                value: 73,
                min: 0,
                max: $('.oled-slider-wrap').width(),
                slide: function( event, ui ) {
                    $(".bad-oled-cont").css({width: ui.value});
                    $(".section-4 .white-line").css({left: ui.value + 4});
                }
        });
        $(".bad-oled-cont").css({width: $( ".oled-slider" ).slider( "value" )});
        $(".section-4 .white-line").css({left: $( ".oled-slider" ).slider( "value" ) + 4});


		$( ".hdr-slider" )
			.slider('destroy')
			.slider({
				range: "min",
				value: $('.hdr-slider-wrap').width()/2,
				min: 0,
				max: $('.hdr-slider-wrap').width(),
				slide: function( event, ui ) {
					$(".bad-hdr-cont").css({width: ui.value});
					$(".hdr-tv-block .white-line").css({left: ui.value + 4});
					$('.hdr-default, .hdr, .hdr-slider-wrap .disclamer').fadeOut(300);

				}
			});
		$(".bad-hdr-cont").css({width: $( ".hdr-slider" ).slider( "value" )});
		$(".hdr-tv-block .white-line").css({left: $( ".hdr-slider" ).slider( "value" ) + 4});
		$( ".pmi-slider" )
			.slider('destroy')
			.slider({
				range: "min",
				value: $('.pmi-slider-wrap').width()/2,
				min: 0,
				max: $('.pmi-slider-wrap').width(),
				slide: function( event, ui ) {
					$(".bad-pmi-cont").css({width: ui.value});
					$('.pmi, .nopmi').fadeOut(300);

					$(".pmi-tv .white-line").css({left: ui.value + 4});
				}
			});
		$(".bad-pmi-cont").css({width: $( ".pmi-slider" ).slider( "value" )});
		$(".pmi-tv .white-line").css({left: $( ".pmi-slider" ).slider( "value" ) + 4});

    });
};
var setSlidersValues = function(index){
	$('.slider-diag-counter').empty();
	$('.section-2 .right-tv-text span').empty();
	$('.slider-diag-counter').append(diagonals[index] + '″');
	$('.section-2 .right-tv-text span').append(count[index]);
    $('.section-2 .right-tv-text .link-tv').attr('href', '/ru/televisions/2018#?hd=0&fullhd=0&k4=0&led=0&super_uhd=0&oled=0&just_uhd=0&dolby_atmos=0&ultra_surround=0&hkardon=0&virtual_surround_plus=0&virtual_surround=0&hdr=0&hdr_dolby=0&smarttv=0&magicremote=0&nanocell=0&ips=0&size_from='+diagonals[index]+'"&size_to='+diagonals[index]+'"');
	$(".slider-diag").slider('value',index);

	$('.slider-width-counter').empty();
$('.section-2 .tv-width').empty();
$('.slider-width-counter').append(widths[index] + " x " + heights[index] + " см");
$('.section-2 .tv-width').append(widths[index] + " x " + heights[index] + " см");
$(".slider-width").slider('value',widths[index]);

	$('.slider-height-counter').empty();
	$('.section-2 .tv-height').empty();
	$('.slider-height-counter').append(heights[index] + " см");
	$('.section-2 .tv-height').append(heights[index] + " см.");
	$(".slider-height").slider('value', heights[index]);

    $('.slider-from-counter').empty();
    $('.slider-from-counter').append(from[index] + " см");
    $(".slider-from").slider('value', from[index]);
    if ($(window).width()<830) {
        $('#png32').css('opacity', '0');
        $('#png43').css('opacity', '0');
        $('#png49').css('opacity', '0');
        $('#png55').css('opacity', '0');
        $('#png60').css('opacity', '0');
        $('#png65').css('opacity', '0');
        $('#png75').css('opacity', '0');
        $('#png77').css('opacity', '0');
        $('#png86').css('opacity', '0');
    	$(widthMobUrls[index]).css('opacity', '1');
        $('.tv-image').css('background', 'none');
    } else {
        $('#png32').css('opacity', '0');
        $('#png43').css('opacity', '0');
        $('#png49').css('opacity', '0');
        $('#png55').css('opacity', '0');
        $('#png60').css('opacity', '0');
        $('#png65').css('opacity', '0');
        $('#png75').css('opacity', '0');
        $('#png77').css('opacity', '0');
        $('#png86').css('opacity', '0');
    	$(widthUrls[index]).css('opacity', '1');
        $('.tv-image').css('background', 'none');
    }
}
var getNearest = function(value, arr){
	var valCount = diagonals.length - 1;
	var res = diagonals.length - 1;
	for(var i = 0; i <= valCount; i++){
		if(arr == 'widths'){
			if(widths[i] >= value){
				res = i;
				break;
			}
		} else if(arr == 'heights'){
			if(heights[i] >= value){
				res = i;
				break;
			}
        } else if(arr == 'from'){
            if(from[i] >= value){
                res = i;
                break;
            }
		} else{
			if(diagonals[i] >= value){
				res = i;
				break;
			}
		}
	}
	return res;
}
var getDivsCoords = function(){
	var res = [];
	for(var i = 2; i <= 9; i++){
		res[i] = parseInt($('.block-'+i).offset().top);
	}
	return res;
}
var getArticleNumber = function(){
	coords=getDivsCoords();
	var scroll = $(window).scrollTop();
	    //console.log(scroll);
	if(scroll < coords[2])
	{
	    $('.arrows .counter .main').empty();
	    $('.arrows .counter .main').append(1);
	} else if(scroll > coords[10])
	{
	    $('.arrows .counter .main').empty();
	    $('.arrows .counter .main').append(9);
	}
	for(var i = 2; i < 10; i++){
	    //console.log(coords[i] + ' ' + scroll + ' ' + coords[i + 1]);
	    if(scroll >= coords[i] && scroll < coords[i + 1]){
	    	$('.arrows .counter .main').empty();
	    	$('.arrows .counter .main').append(i-1);
	    }
	}
}
$(window).scroll(function (event) {
// 	getArticleNumber();    
	$('.pmi, .nopmi').fadeIn(300);
	$('.hdr-default, .hdr, .hdr-slider-wrap .disclamer').fadeIn(300);
	
});
var arrowTopClick = function(){
	coords=getDivsCoords();
	$('.arrows .arrow-top').click(function(){
		div_id = parseInt($('.arrows .counter .main').text());
		if(div_id >= 2){
			//console.log(coords[div_id]);
			$('html, body').stop(true, true).animate({
	            scrollTop: coords[div_id]
	        }, 500);
		}
	});
}
var arrowBotClick = function(){
	coords=getDivsCoords();
	$('.arrows .arrow-bottom').click(function(){
		div_id = parseInt($('.arrows .counter .main').text()) + 1;
		if(div_id < 10){
			//console.log(coords[div_id]);
			$('html, body').stop(true, true).animate({
	            scrollTop: coords[div_id+1]+1
	        }, 500);
		}
	});
}
var showRightMenu = function(){
	$('.menu-button').click(function(){
		$('.right-menu').fadeIn('slow');
		$('.popup-back').show();
		$('body').css('overflow','hidden');
	});
}
var hideRightMenu = function(){
	$('.right-menu .close, .right-menu .options li, .popup-back').click(function(){
		$('.right-menu').hide();
		$('.popup-back').hide();
		$('body').css('overflow','visible');		
	});	
}
var scrollFromMenu = function(){
	$('.nav-menu li a').click(function(){
		var element = $(this).attr('data-goto');
		if (element != "#"){
			$('html,body').animate({
	        scrollTop: $(element).offset().top+5},
	        'slow');
        }
        return false;
	})
}

function isMobile() {
	if($(window).width()<768) {
		$('body').addClass('is-mobile');
	} else {
		$('body').removeClass('is-mobile');
	}
}


 /*  (function ($) {
    'use strict';

    $.fn.sectionScroll = function (options) {
        var $container = $('.wrap'),
        // var $container = this,
            $window = $(window),
            $section_number = 1,
            lastId,
            settings = $.extend({
                bulletsClass: 'section-bullets',
                sectionsClass: 'scrollable-section',
                scrollDuration: 1000,
                titles: true,
                topOffset: 0,
                easing: ''
            }, options);

        var $sections = $('.' + settings.sectionsClass);
        var $bullets  = $('<div class="bullets-container"><ul class="'+ settings.bulletsClass +'"></ul></div>')
            .prependTo($container)
            .find('ul');

        
        
        
        
        var bullets_html = '';
        $sections.each(function () {

            var $this = $(this);
            var title = $this.data('section-title') || '';

            $this.attr('id', 'scrollto-section-' + $section_number);

            var bullet_title = settings.titles ? '<span>' + title + '</span>' : '';

            bullets_html += '<li><a title="' + title + '" href="#scrollto-section-' + $section_number + '">' + bullet_title + '</a></li>';

            $section_number++;
        });

        var $bullets_items = $(bullets_html).appendTo($bullets);

        var scrollItems = $bullets_items.map(function () {
            var item = $($(this).find('a').attr('href'));
            if (item[0]) {
                return item;
            }
        });

        $bullets_items.on('click', function (e) {

            var href = $(this).find('a').attr('href'),
                offsetTop = href === '#' ? 0 : $(href).offset().top;

            $('html, body').stop().animate({

                scrollTop: offsetTop - settings.topOffset
            }, settings.scrollDuration, settings.easing, function(){
                $container.trigger('scrolled-to-section').stop();
            });
            e.preventDefault();
        });

      $window.on('scroll', function () {
            var fromTop = $window.scrollTop() + ($window.height() / 2.5);

            var cur = scrollItems.map(function () {

                if ($(this).offset().top < fromTop) {
                    return this;
                }
            });
            cur = cur[cur.length - 1];
            var id = cur[0] ? cur[0].id : '';

            if (lastId !== id) {
                $sections.removeClass('active-section');

                $(cur).addClass('active-section');
                $bullets_items
                    .removeClass('active')
                    .find('a[href="#' + id + '"]')
                    .parent()
                    .addClass('active');

                lastId = id;
                $.fn.sectionScroll.activeSection = cur;
                $container.trigger('section-reached');
            }
        }); 

         $(function() {
            $window.scroll();
        });

        return $container;
    };
}(jQuery));*/



$(document).ready(function() {
    if($(window).width() < 768){
        return
    } else {
        var scrollTimeout,
            scrollGap = 0,
            scrollSelector = '.full-section';

        $(window).scroll(function () {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }

            scrollTimeout = setTimeout(function () {
                var nearestBlock = false,
                    nearestBlockOffset = false,
                    range = {
                        top: $(window).scrollTop() - scrollGap,
                        middle: $(window).scrollTop(),
                        bottom: $(window).scrollTop() + scrollGap
                    };

                $(scrollSelector).each (function () {
                    if ($(this).offset().top < range.bottom && $(this).offset().top > range.top) {
                        if ($(this).offset().top > range.middle) {
                            blockOffset = $(this).offset().top - range.middle;
                        } else {
                            blockOffset = range.middle - $(this).offset().top;
                        }

                        if (nearestBlockOffset === false || nearestBlockOffset > blockOffset) {
                            nearestBlockOffset = blockOffset;
                            nearestBlock = $(this);
                        }
                    }
                });

                if (nearestBlock != false && nearestBlockOffset > 0) {
                    $("html, body").animate({scrollTop: nearestBlock.offset().top}, {duration: 300, easing: 'swing'});
                }
            }, 1000);
        });
    }
});


/*$(document).ready(function () {
    $('body').sectionScroll({
        sectionsClass: 'slide-it'
    });
});*/
