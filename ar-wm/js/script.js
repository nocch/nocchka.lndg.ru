$(function(){
	eqName();
	$(window).resize(function(){
		eqName();

	});
	$('.slider').owlCarousel({
		items:1,
		dots: true,
		loop:true,
		touchDrag:false,
		navText:["",""]
	});
	// $('.tab').click(function(){
	// 	if(!($(this).hasClass('active'))) {
	// 		$('.tab').removeClass('active');
	// 		$(this).addClass('active');
	// 		var pageName = $(this).data('page');
	// 		// $('.tab-content').load(pageName+'.html',eqName());
	// 		$('.tab-content').load('/sa_en/rac-air-conditioners/dualinverter/script/'+pageName+'.html',eqName());
	// 		$(document).ajaxComplete(function(){
	// 			setTimeout(eqName(),1000);
	// 		})
	// 	}
		
	// });
	$('body').on('click','.show-shop-new>a', function(){
    	$('.opened1').removeClass('opened1');
		
		if(!($(this).siblings('.popup-buy').hasClass('opened'))) {
			$('.popup-buy').fadeOut(500);
			$('.popup-buy').removeClass('opened');
			$(this).removeClass('opened1');

		}
		$(this).siblings('.popup-buy').fadeIn(500);
		$(this).siblings('.popup-buy').addClass('opened');
		$(this).addClass('opened1');
		return false;
	});
	$('body').on('click','.show-shop a.opened1', function(){
		$(this).siblings('.popup-buy').fadeOut(500);
		$(this).siblings('.popup-buy').removeClass('opened');
		$(this).removeClass('opened1');
	});
	$(document).click(function(event) {
    	if ($(event.target).closest('.opened').length) return;
    	$('div.opened').fadeOut(500);
    	$('.opened').removeClass('opened');
    	$('.opened1').removeClass('opened1');
    	event.stopPropagation();
	});
	$('.slider-button.an').click(function(){
		var dest = $('.tab-content').offset().top;
		$('html:not(:animated),body:not(:animated)').animate({scrollTop: dest}, 500);
		return false;
	});
});
function eqName() {
	var hm = 0;
	$('.tab-main-products .product-name').each(function(){
		var h = $(this).height();
		if (h>hm) {
			hm = h;
		}
	});
	$('.tab-main-products .product-name').height(hm);
	var hm1 = 0;

	$('.tab-main-products .product-adv').each(function(){
		var h1 = $(this).height();
		if (h1>hm1) {
			hm1 = h1;
		}
	});
	$('.tab-main-products .product-adv').height(hm1);

	var hm2 = 0;
	$('.models-wrap .product-name').each(function(){
		var h2 = $(this).height();
		if (h2>hm2) {
			hm2 = h2;
		}
	});
	$('.models-wrap .product-name').height(hm2);
	var hm3 = 0;

	$('.models-wrap .product-adv').each(function(){
		var h3 = $(this).height();
		if (h3>hm3) {
			hm3 = h3;
		}
	});
	$('.models-wrap .product-adv').height(hm3);

	var hm4 = 0;

	$('.brandshop-item').each(function(){
		var h4 = $(this).height();
		if (h4>hm4) {
			hm4 = h4;
		}
	});
	$('.brandshop-item').height(hm4);
}