<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" trimDirectiveWhitespaces="true" %>
<jsp:include page="/WEB-INF/jsp/common-pf4/includes/doctype.jsp" />
<%@ include file="/WEB-INF/jsp/common-pf4/includes/common.jsp"%>
<% request.setAttribute("$pageType", "microsite"); %>
<!-- <html <c:out value='${$isRtlHtml }' escapeXml="false"/>" class="no-js no-ie" lang="<c:out value='${$languageCd}'/>" xmlns:fb="http://www.facebook.com/2008/fbml" data-countrycode="<c:out value='${$localeCd}'/>" xmlns:og="http://opengraphprotocol.org/schema/" data-java-localecode="<c:out value='${$javaLocale}'/>"> -->
<!--[if lt IE 9]><html <c:out value='${$isRtlHtml }' escapeXml="false"/>" class="no-js ie lt-ie9" lang="<c:out value='${$languageCd}'/>" xmlns:fb="http://www.facebook.com/2008/fbml" data-countrycode="<c:out value='${$localeCd}'/>" xmlns:og="http://opengraphprotocol.org/schema/" data-java-localecode="<c:out value='${$javaLocale}'/>"><![endif]-->
<!--[if IE 9]><html <c:out value='${$isRtlHtml }' escapeXml="false"/>" class="no-js ie ie9" lang="<c:out value='${$languageCd}'/>" xmlns:fb="http://www.facebook.com/2008/fbml" data-countrycode="<c:out value='${$localeCd}'/>" xmlns:og="http://opengraphprotocol.org/schema/" data-java-localecode="<c:out value='${$javaLocale}'/>" ><![endif]-->
<!--[if gt IE 9]><!-->
<html <c:out value='${$isRtlHtml }' escapeXml="false" /> class="no-js" lang="
<c:out value='${$languageCd}' />" xmlns:fb="http://www.facebook.com/2008/fbml" data-countrycode="
<c:out value='${$localeCd}' />" xmlns:og="http://opengraphprotocol.org/schema/" data-java-localecode="
<c:out value='${$javaLocale}' />">
<head>
	<meta charset="utf-8">
	<meta name="theme-color" content="#fff">
	<title>Футбол. Прямые трансляции— LG Россия</title>
	<meta name="description" content="Смотрите футбол на телевизоре LG. Прямые трансляции всех  64 матчей чемпионата. Возможность повторного просмотра.">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<meta name="description" content="Смотрите футбол на телевизоре LG. Прямые трансляции всех  64 матчей чемпионата. Возможность повторного просмотра.">
	<meta name="keywords" content="">
	<meta property="og:title" content="Футбол, прямые трансляции всех 64 матчей чемпионата мира  — LG Россия" /> 
	<meta property="og:description" content="Смотрите футбол на телевизоре LG. Прямые трансляции всех  64 матчей чемпионата. Возможность повторного просмотра."/>
	<meta property="og:url" content="https://www.lg.com/ru/television/football"> 
	<meta property="og:keywords" content="" />
	<meta property="og:image" content="/ru/televisions/football/share.png">
	<link rel="stylesheet" href="/ru/televisions/football/css/topmenu.min.css?v=1529172312347">
	<link rel="stylesheet" href="/ru/televisions/football/css/style.css?v=1529172312347">
    <link rel="stylesheet" href="/ru/televisions/football/css/style-n.css?v=1529172312347">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300|Lora|Roboto:400,500" rel="stylesheet" type="text/css"> 
	<script src="//assets.adobedtm.com/9df6f1d56aab8e1a23bc5d911dd01089b83d4a51/satelliteLib-38d93f9577411a7972ebaf4fc4b2e4c7d977cdc7.js"></script>
	<!-- Google Tag Manager -->
	<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-4S9T"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-4S9T');</script>
	<!-- End Google Tag Manager -->
<style>.container {
    overflow-x: hidden;
}
@media (max-width: 480px) {
footer .socials-footer {
    float: right;
    width: auto!important;}
.lg_promo_ftb h1 {
    font-size: 42px!important;
    }    
    
}
    
 
    .rowblack {background:#000;}

.modal {
  will-change: visibility, opacity;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1000;
  visibility: hidden;
  opacity: 0;
  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-transition-delay: $modal-delay;
  transition-delay: $modal-delay;
}

.modal--active {
  visibility: visible;
  opacity: 1;
}

.modal--align-top {
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.modal__bg {
  background: transparent;
}

.modal__dialog {
  max-width: 100%;
  width: 100%;
  opacity: 1;
  padding: 0;
}

.modal__content {
  will-change: transform, opacity;
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 0.4rem;
  background: #000;
  background-clip: padding-box;
  opacity: 0;
  -webkit-transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
}

.modal__content--active {
  opacity: 1;
}

.modal__close {
  z-index: 1100;
  cursor: pointer;
}

.modal__trigger {
  position: relative;
  display: inline-block;
  padding: 1.2rem 2.4rem;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1;
  cursor: pointer;
  background: #000;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.modal__trigger--active {
  z-index: 10;
}

.modal__trigger:hover {
  background: #000;
}

#modal__temp {
  will-change: transform, opacity;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  -webkit-transform: none;
  transform: none;
  opacity: 1;
  -webkit-transition: opacity 0.1s ease-out, -webkit-transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: opacity 0.1s ease-out, -webkit-transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: opacity 0.1s ease-out, transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: opacity 0.1s ease-out, transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

/**
 * Demo specific CSS
 */



img {
  max-width: 100%;
}

.demo-btns header {
  padding: 7vh 10vw;
  background: #000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.demo-btns header h1 {
  margin: 0;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 300;
}

.demo-btns .info {
  background: #000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-flow: column wrap;
  flex-flow: column wrap;
}

.demo-btns p {
  text-align: center;
  color: #fff;
}

.demo-btns .link {
  font-size: 20px;
}

.demo-btns .modal__trigger {
  margin-right: 3px;
}

.demo-close {
  position: absolute;
  top: 0;
  right: 0;
  margin: 1.2rem;
  padding: 0.6rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.demo-close svg {
  width: 24px;
  fill: #fff;
  pointer-events: none;
  vertical-align: top;
}

.demo-close:hover {
  background: rgba(0, 0, 0, 0.6);
}

.container574 {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}

.video574 {
  position: absolute;
  left: 0;
  width: 100%;
  height: 50vw;
  border-width: 0px!important;
   position: absolute;
  top: 50%;
  transform: translateY(-50%);
  
}

</style>
</head>
<body>
<div class="main-header">
	<div class="top-line">
		<div class="container-wrap clearfix">
			<div class="logo">
				<a href="/ru/"><img src="/ru/televisions/football/img/head/logo.png?v=1529172312347" alt="LG-logo"></a>
			</div>
				<div class="m-right">
				<div class="search">
					<a href="https://www.lg.com/ru/search.lg">
						<img src="/ru/televisions/football/img/head/search.png?v=1529172312347" alt="">
					</a>
				</div>
			</div>
			<div class="nav-wrapper" >
				<ul class="main-menu">
					<li><a href="/ru/lg-signature" class="primary-nav-link" data-index="0"><span>LG SIGNATURE</span></a></li>
					<li><a href="https://www.lg.com/ru/tv-audio-video">ТВ/Аудио/Видео</a></li>
					<li><a href="https://www.lg.com/ru/computer-products">IT Продукция</a></li>
					<li><a href="https://www.lg.com/ru/mobile">Смартфоны</a></li>
					<li><a href="https://www.lg.com/ru/home-appliances">Бытовая техника</a></li>
					<li><a href="https://www.lg.com/ru/support">Поддержка</a></li>
				</ul>
			</div>
			<div class="mob-menu">
				<i></i>
			</div>
		</div>
	</div>
	<div class="middle-line">
		<div class="container-wrap clearfix" style="position:relative;" >
            
            <ol style="position:absolute; bottom:0px; left: 0; color:#fff; display:inline; padding:10px">
			<li style="color:#fff; display:inline;">
			<a href="/ru" style="color:#fff;text-decoration:none;"><span itemprop="name">Домашняя страница</span></a><meta >  &gt;</li>
			<li style="color:#fff; display:inline;" >
			<a  href="/ru/televisions" style="color:#fff;text-decoration:none;"><span >Телевизоры</span></a><meta >  &gt;</li>
			<li style="color:#fff; display:inline;">
			<span><span>Футбол</span></span><meta></li>
			</ol>
            
            
            
			<ul class="middle-menu clearfix">
				<li><a href="https://rushop.lg.com/?utm_source=lgcom&amp;utm_medium=redmenu" target="_blank" title="Открывается в новом окне">Онлайн-магазин</a></li>
				<li><a href="https://www.lg.com/ru/about-lg/press-and-media/press-release">Пресс-релизы</a></li>
				<!-- <li>
					<a class="country" href="#"><img src="/ru/televisions/football/img/head/country_russia.png?v=1529172312347" alt="">Россия</a>
					<a class="country" href="https://www.lg.com/common/index.jsp">Русский</a>
				</li> -->
			</ul>
		</div>
	</div>
</div>

    <content class="container">
     <div class="row lg_promo_ftb">
          <div class="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12">
          <h1 class="centr-centr">Смотрите футбол на&nbsp;телевизоре&nbsp;LG</h1>
            
          </div>
        </div>
        
<!--<div class="row">
        <div class="nopadding col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="block-1-wrapper text_positoin">
               <img src="/ru/televisions/football/img/block1-im2.png" class="img-responsive"> 
            </div>
        </div>

      </div>-->
        
      <div class="row nopadding">
        <div class="nopadding col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="block-10-wrapper text_positoin">
               <img src="/ru/televisions/football/img/fot.jpg" class="img-responsive">
            </div>
        </div>
      </div>
      <div class="row footb2 rowgray ">
       <div class="col-lg-2 col-lg-offset-2 col-md-2 col-md-offset-2 col-sm-12 col-xs-12">
            <img src="/ru/televisions/football/img/footb2.png" class="img-responsive">
            <div class="text">Прямые трансляции всех 
64 матчей чемпионата.
Возможность повторного просмотра.

            </div>
            </div>
      
      <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
           <img src="/ru/televisions/football/img/footb3.png" class="img-responsive">
          <div class="text">Трансляции будут доступны в UHD HDR качестве и со звуком Dolby Digital.</div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
           <img src="/ru/televisions/football/img/footb4.png" class="img-responsive">
           <div class="text">Турнирная таблица 
и результаты матчей.</div>

      </div>
      <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
           <img src="/ru/televisions/football/img/footb5.png" class="img-responsive">
           <div class="text">Дополнительные видеоматериалы – 
новости, интервью, 
лучшие моменты.</div>
      </div>
        </div>      
         

        
      <div class="row lg_promo_ftb">
          <div class="col-lg-8 col-lg-offset-2 col-md-8 col-sm-12 col-xs-12">
          <h1>LG ПЛЮС КАНАЛЫ</h1>
            
          </div>
        </div>

        
      <div class="row">
        <div class="nopadding col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="block-3n-wrapper text_positoin">
               <img src="/ru/televisions/football/img/lgplus2.jpg" class="img-responsive">
                <div class="text-container">

                    
                    <div class="lgplus-icon">
                    <div class="row pad20">
                        <div class="col-lg-2"> <img src="/ru/televisions/football/img/tv-on.png" class="img-responsive"></div>
                        <div class="col-lg-10 text">Откажитесь от дополнительных<br>приставок</div>  
                    </div>
                    <div class="row pad20">
                        <div class="col-lg-2"> <img src="/ru/televisions/football/img/tv-on2.png" class="img-responsive"></div>
                        <div class="col-lg-10 text">Забудьте о проблемах<br>с антенной</div>  
                    </div>
                    <div class="row pad20">
                        <div class="col-lg-2"> <img src="/ru/televisions/football/img/tv-on3.png" class="img-responsive"></div>
                        <div class="col-lg-10 text">Получите доступ<br>к 200 каналам</div>  
                    </div>
                    </div>

                </div>
                <!--<div class="desk second-img-container">
                    <img src="/ru/televisions/football/img/circle1.png" class="img-responsive">
                    <div class="text2">
                        Смотрите ЧМ-2018 по футболу<br>в 4K и HDR на LG OLED TV
                    </div>
                    <a href=""><img src="/ru/televisions/football/img/arrow-down.png" class="img-responsive arrow"></a>
                </div>-->
            </div>
        </div>
      </div>
        
        
<div class="row rowgray block-footb">
    <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
        <h2 class="nopadding">Смотрите трансляции Чемпионата мира
            в 4K и HDR в приложении Первого канала в LG Smart TV
        </h2>
    </div>
</div>
        
<row>
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
<div class="demo-btns" style="padding-top:50px; padding-bottom:50px;">
  <div class="info">
    <div class="buttons">
      <p>
        <a href="" data-modal="#modal" data-src="f5KG2w7nY7M" class="modal__trigger"> <img src="/ru/televisions/football/img/black-video1.png" class="img-responsive"></a>
      </p>
    </div>

  </div>
</div>
    </div>
</row>
<!-- Modal -->
<div id="modal" class="modal modal__bg" role="dialog" aria-hidden="true">
  <div class="modal__dialog">
    <div class="modal__content">
      <div class="oleddmv1">
      </div>

      <!-- modal close button -->
      <a href="" class="modal__close demo-close">
					<svg class="" viewBox="0 0 24 24"><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/><path d="M0 0h24v24h-24z" fill="none"/></svg>
				</a>

    </div>
  </div>
</div>




<!-- Ettrics -->

        
        
<div class="row lg_promo_ftb">
    <div class="col-lg-8 col-lg-offset-2 col-md-8 col-sm-12 col-xs-12">
        <h1 style="    margin-bottom:10px;">Слушает. Думает. Отвечает</h1>
        <p style="    margin-bottom:30px;" >Телевизоры LG OLED TV оснащены искусственным интеллектом</p>
    </div>
</div>
<div class="row">
    <div class="nopadding col-lg-12 col-md-12 hidden-sm hidden-xs">
        <div class="block-9-wrapper text_positoin">
            <img src="/ru/televisions/football/img/otvechaet.jpg" class="img-responsive">
            <div class="text-container">
                <div class="text text9">Привет, приятно познакомиться
                </div>
            </div>
            <div class="second-img-container">
                <img src="/ru/televisions/football/img/nice4.png" class="anim-gif img-anim-gif4">
                <img src="/ru/televisions/football/img/nice5.png" class="anim-gif img-anim-gif5">
                <img src="/ru/televisions/football/img/nice3.png" class="anim-gif img-anim-gif3">
                <img src="/ru/televisions/football/img/nice6.png" class="anim-gif img-anim-gif6-r">
                <img src="/ru/televisions/football/img/nice6.png" class="anim-gif img-anim-gif6">
                <img src="/ru/televisions/football/img/nice5.png" class="anim-gif img-anim-gif5-r">
                <img src="/ru/televisions/football/img/nice4.png" class="anim-gif img-anim-gif4-r">
                <div class="nul-container">
                </div>
            </div>
        </div>
    </div>
    <div class="hidden-lg hidden-md col-sm-12 col-xs-12">
        <div class="block-9-wrapper text_positoin">
            <img src="/ru/televisions/football/img/otvechaet-mob.jpg" class="img-responsive">
            <div class="text-container">
                <div class="text text9">Привет, приятно познакомиться
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row rowgray lg_promo_ftb">
    <div class="lg-pad col-lg-8 col-lg-offset-2 col-md-8 col-sm-12 col-xs-12">
        <h2>Модельный ряд телевизоров LG 2018</h2>
    </div>
</div>
<div class="row rowgray">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
        <div class="block-middle image-exist TIBlock image-width-940 block-right" style="background:#fff;">
            
            
            <div class="grid-layout promo-grid">
                <div class="row ">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2 style="text-align:left; margin-left:60px; margin-bottom:30px; margin-top:50px;">Телевизоры LG OLED TV</h2>
                    </div>
                </div>
                <div class="grid-content">
                    <div class="row nomargin" style="border-bottom:1px solid#ccc; padding:30px;">
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr" >
                                <a href="/ru/televisions/lg-OLED77W8">
                                    <div class="product-tile-picture-link">
                                        <img src="/ru/televisions/football/img/tel.jpg" class="img-responsive">
                                    </div>
                                </a>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr product-descr">
                                    <h4 class="product-tile-title">
                                        <a style="color:#333; text-decoration:none"  href="/ru/televisions/lg-OLED77W8" >LG SIGNATURE OLED телевизор 77" OLED77W8
                                        </a>	
                                    </h4>
                                  
                                        <ul>
                                            <li>LG SIGNATURE
                                            </li>
                                            <li>webOS Smart TV
                                            </li>
                                            <li>LG ThinQ AI
                                            </li>
                                            <li>4K Cinema HDR, Dolby Atmos®
                                            </li>
                                        </ul>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr">
                                <a href="/ru/televisions/lg-OLED77W8" class="button">Узнать больше</a>
                                <a href="/ru/products/wtb?modelId=MD05941318" class="button" style="margin-top:2px;">Где купить</a>
                        </div>
                    </div>
                    
                    <div class="row nomargin" style="border-bottom:1px solid#ccc; padding:30px;">
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr" >
                                <a href="/ru/televisions/lg-OLED77C8">
                                    <div class="product-tile-picture-link">
                                        <img src="/ru/televisions/football/img/OLED_C8.jpg" class="img-responsive">
                                    </div>
                                </a>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 product-descr prod-centr">
                                    <h4 class="product-tile-title">
                                        <a style="color:#333; text-decoration:none"  href="/ru/televisions/lg-OLED77C8" >OLED телевизор 77" OLED77C8
                                        </a>	
                                    </h4>
                                  
                                        <ul>
                                            <li>4K Cinema HDR
                                            </li>
                                            <li>Dolby Atmos®
                                            </li>
                                            <li>webOS Smart TV
                                            </li>
                                            <li>Самоподсвечивающиеся пиксели
                                            </li>
                                        </ul>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr">
                                <a href="/ru/televisions/lg-OLED77C8" class="button">Узнать больше</a>
                                <a href="/ru/products/wtb?modelId=MD05935962" class="button" style="margin-top:2px;">Где купить</a>
                        </div>
                    </div>
                    
                </div>
            </div>
                        <div class="grid-layout promo-grid">
                <div class="row ">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 prod-centr product-descr">
                        <h2 style="text-align:left; margin-left:60px; margin-bottom:30px; margin-top:50px;">Телевизоры LG SUPER UHD TV</h2>
                    </div>
                </div>
                <div class="grid-content">
                    <div class="row nomargin" style="border-bottom:1px solid#ccc; padding:30px;">
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr" >
                                <a href="/ru/televisions/lg-49SK7900">
                                    <div class="product-tile-picture-link">
                                        <img src="/ru/televisions/football/img/tel2-1.jpg" class="img-responsive">
                                    </div>
                                </a>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr product-descr">
                                    <h4 class="product-tile-title">
                                        <a style="color:#333; text-decoration:none"  href="/ru/televisions/lg-49SK7900">	Ultra HD (4K) LED телевизор LG 49SK7900PLA (2018) 
                                        </a>	
                                    </h4>
                                  
                                        <ul>
                                            <li>Технология Nano Cell™
                                            </li>
                                            <li>4K Активный HDR
                                            </li>
                                            <li>Ultra Stadium Surround
                                            </li>
                                            <li>webOS 3.5
                                            </li>
                                        </ul>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr">
                                <a href="/ru/televisions/lg-49SK7900" class="button">Узнать больше</a>
                                <a href="/ru/products/wtb?modelId=MD05950138" class="button" style="margin-top:2px;">Где купить</a>
                                <!--/noindex-->	
                        </div>
                    </div>
                    <div class="row nomargin" style="border-bottom:1px solid#ccc; padding:30px;">
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr" >
                                <a href="/ru/televisions/lg-55SK7900">
                                    <div class="product-tile-picture-link">
                                        <img src="/ru/televisions/football/img/tel2-1.jpg" class="img-responsive">
                                    </div>
                                </a>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr product-descr">
                                    <h4 class="product-tile-title">
                                        <a style="color:#333; text-decoration:none"  href="/ru/televisions/lg-55SK7900">	Ultra HD (4K) LED телевизор LG 55SK7900PLA (2018) 
                                        </a>	
                                    </h4>
                                  
                                        <ul>
                                            <li>Технология Nano Cell™
                                            </li>
                                            <li>4K Активный HDR
                                            </li>
                                            <li>Ultra Stadium Surround
                                            </li>
                                            <li>webOS 3.5
                                            </li>
                                        </ul>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr">
                                <a href="/ru/televisions/lg-55SK7900" class="button">Узнать больше</a>
                                <a href="/ru/products/wtb?modelId=MD05950138" class="button" style="margin-top:2px;">Где купить</a>
                                <!--/noindex-->	
                        </div>
                    </div>
                    
                    <div class="row nomargin" style="border-bottom:1px solid#ccc; padding:30px;">
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr" >
                                <a href="/ru/televisions/lg-65SJ810V">
                                    <div class="product-tile-picture-link">
                                        <img src="/ru/televisions/football/img/tel2-3.jpg" class="img-responsive">
                                    </div>
                                </a>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr product-descr">
                                    <h4 class="product-tile-title">
                                        <a style="color:#333; text-decoration:none"  href="/ru/televisions/lg-65SJ810V">	Телевизор LG 65SJ810V 65" SUPER UHD телевизор с технологией Nano Cell™
                                        </a>	
                                    </h4>
                                  
                                        <ul>
                                            <li>Nano Cell™ панель
                                            </li>
                                            <li>Активный HDR с Dolby Vision™
                                            </li>
                                            <li>Сертификат harman/kardon®
                                            </li>
                                            <li>Ultra Surround
                                            </li>
                                        </ul>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr">
                                <a href="/ru/televisions/lg-65SJ810V" class="button">Узнать больше</a>
                                <a href="/ru/products/wtb?modelId=MD05816152" class="button" style="margin-top:2px;">Где купить</a>
                                <!--/noindex-->	
                        </div>
                    </div>
                    
                </div>
            </div>
                        <div class="grid-layout promo-grid">
                <div class="row ">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 prod-centr">
                        <h2 style="text-align:left; margin-left:60px; margin-bottom:30px; margin-top:50px;">Телевизоры UHD 4K</h2>
                    </div>
                </div>
                <div class="grid-content">
                    <div class="row nomargin" style="border-bottom:1px solid#ccc; padding:30px;">
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr" >
                                <a href="http://www.lg.com/ru/televisions/lg-43UJ630V">
                                    <div class="product-tile-picture-link">
                                        <img src="/ru/televisions/football/img/tel3-1.jpg" class="img-responsive">
                                    </div>
                                </a>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr product-descr">
                                    <h4 class="product-tile-title">
                                        <a style="color:#333; text-decoration:none"  href="/ru/televisions/lg-43UJ630V">	 		
 	
                                                43" UHD телевизор с высококачественной IPS панелью 43UJ630V
                                        </a>	
                                    </h4>
                                  
                                        <ul>
                                            <li>Высококачественная IPS панель
                                            </li>
                                            <li>Активный HDR
                                            </li>
                                            <li>Ultra Surround
                                            </li>
                                            <li>webOS 3.5
                                            </li>
                                        </ul>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr">
                                <a href="/ru/televisions/lg-43UJ630V" class="button">Узнать больше</a>
                                <a href="/ru/products/wtb?modelId=MD05822955" class="button" style="margin-top:2px;">Где купить</a>
                                <!--/noindex-->	
                        </div>
                    </div>
                    <div class="row nomargin" style="border-bottom:1px solid#ccc; padding:30px;">
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr" >
                                <a href="/ru/televisions/lg-49UJ620V">
                                    <div class="product-tile-picture-link">
                                        <img src="/ru/televisions/football/img/tel3-2.jpg" class="img-responsive">
                                    </div>
                                </a>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr product-descr">
                                    <h4 class="product-tile-title">
                                        <a style="color:#333; text-decoration:none"  href="/ru/televisions/lg-49UJ620V">	
  							 					
 						                 49" UHD телевизор с высококачественной IPS панелью 49UJ620V
                                        </a>	
                                    </h4>
                                  
                                        <ul>
                                            <li>Высококачественная IPS панель
                                            </li>
                                            <li>Активный HDR
                                            </li>
                                            <li>Ultra Surround
                                            </li>
                                            <li>webOS 3.5
                                            </li>
                                        </ul>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr">
                                <a href="/ru/televisions/lg-49UJ620V" class="button">Узнать больше</a>
                                <a href="/ru/products/wtb?modelId=MD05859595" class="button" style="margin-top:2px;">Где купить</a>
                                <!--/noindex-->	
                        </div>
                    </div>
                    
                    <div class="row nomargin" style="border-bottom:1px solid#ccc; padding:30px;">
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr" >
                                <a href="/ru/televisions/lg-49SK7900">
                                    <div class="product-tile-picture-link">
                                        <img src="/ru/televisions/football/img/tel3-3.jpg" class="img-responsive">
                                    </div>
                                </a>
                        </div> 
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr product-descr">
                                    <h4 class="product-tile-title">
                                        <a style="color:#333; text-decoration:none" href="/ru/televisions/lg-49SK7900">UHD телевизор 65" 65UK6100
                                        </a>	
                                    </h4>
                                  
                                        <ul>
                                            <li>Технология Nano Cell™
                                            </li>
                                            <li>4K Активный HDR
                                            </li>
                                            <li>Ultra Stadium Surround
                                            </li>
                                            <li>webOS 3.5
                                            </li>
                                        </ul>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prod-centr">
                                <a href="/ru/televisions/lg-49SK7900" class="button">Узнать больше</a>
                                <a href="http://www.lg.com/ru/products/wtb?modelId=MD05950138" class="button" style="margin-top:2px;">Где купить</a>
                                <!--/noindex-->	
                        </div>
                    </div>
                    
                </div>
            </div>
            

        </div>
    </div>
</div>
        
        
        
        
    </content>
    
	
			<!--noindex-->
		
<footer class="lg-landing-copy">
	<div class="section-wrap">
		<div class="socials-footer">
			<span class="connect">Связаться c нами: </span>
			<div class="socials-wrap">
				<a href="http://vk.com/lgrussia" class="soc vk" target="_blank"><img src="/ru/televisions/football/img/sns_vk_copy.png" alt="" title="Открывается в новом окне"></a>
				<a href="http://www.facebook.com/LGRussia" class="soc fb" target="_blank"><img src="/ru/televisions/football/img/sns_facebook_copy.png" alt="" title="Открывается в новом окне"></a>
				<a class="soc in" target="_blank" href="https://www.instagram.com/lg_rus/" data-sc-item="social-sharing" data-sc-value="instagram"><img src="/ru/televisions/football/img/insta_64-min.png" alt="instagram" title="Открывается в новом окне"></a>
				<a href="http://odnoklassniki.ru/LGRussia" class="soc ok" target="_blank"><img src="/ru/televisions/football/img/sns_odnok_copy.png" alt="" title="Открывается в новом окне"></a>
				<a class="soc yo" target="_blank" href="htintp://youtube.com/lgrussia" data-sc-item="social-sharing" data-sc-value="youtube"><img src="/ru/televisions/football/img/sns_youtube_copy.png" alt="Youtube" title="Открывается в новом окне"></a>
			</div>
		</div>
		<span class="lg-landing-copy-text">Copyright © 2018 LG Electronics. Все права защищены.</span>
	</div>
</footer>
<script src="/ru/televisions/football/js/jquery-2.2.3.min.js"></script>
<!--<script src="/ru/televisions/football/js/script.js?v=1529172312347"></script>-->
<script>
var Modal = (function() {

  var trigger = $qsa('.modal__trigger'); // what you click to activate the modal
  var modals = $qsa('.modal'); // the entire modal (takes up entire window)
  var modalsbg = $qsa('.modal__bg'); // the entire modal (takes up entire window)
  var content = $qsa('.modal__content'); // the inner content of the modal
  var closers = $qsa('.modal__close'); // an element used to close the modal
  var w = window;
  var isOpen = false;
  var contentDelay = 400; // duration after you click the button and wait for the content to show
  var len = trigger.length;

  // make it easier for yourself by not having to type as much to select an element
  function $qsa(el) {
    return document.querySelectorAll(el);
  }

  var getId = function(event) {

    event.preventDefault();
    var self = this;
    // get the value of the data-modal attribute from the button
    var modalId = self.dataset.modal;
    var len = modalId.length;
    // remove the '#' from the string
    var modalIdTrimmed = modalId.substring(1, len);
    // select the modal we want to activate
    var modal = document.getElementById(modalIdTrimmed);
    // execute function that creates the temporary expanding div
    makeDiv(self, modal);
  };

  var makeDiv = function(self, modal) {

    var fakediv = document.getElementById('modal__temp');

    /**
     * if there isn't a 'fakediv', create one and append it to the button that was
     * clicked. after that execute the function 'moveTrig' which handles the animations.
     */

    if (fakediv === null) {
      var div = document.createElement('div');
      div.id = 'modal__temp';
      self.appendChild(div);
      moveTrig(self, modal, div);
    }
  };

  var moveTrig = function(trig, modal, div) {
    var trigProps = trig.getBoundingClientRect();
    var m = modal;
    var mProps = m.querySelector('.modal__content').getBoundingClientRect();
    var transX, transY, scaleX, scaleY;
    var xc = w.innerWidth / 2;
    var yc = w.innerHeight / 2;

    // this class increases z-index value so the button goes overtop the other buttons
    trig.classList.add('modal__trigger--active');

    // these values are used for scale the temporary div to the same size as the modal
    scaleX = mProps.width / trigProps.width;
    scaleY = mProps.height / trigProps.height;

    scaleX = scaleX.toFixed(3); // round to 3 decimal places
    scaleY = scaleY.toFixed(3);


    // these values are used to move the button to the center of the window
    transX = Math.round(xc - trigProps.left - trigProps.width / 2);
    transY = Math.round(yc - trigProps.top - trigProps.height / 2);

    // if the modal is aligned to the top then move the button to the center-y of the modal instead of the window
    if (m.classList.contains('modal--align-top')) {
      transY = Math.round(mProps.height / 2 + mProps.top - trigProps.top - trigProps.height / 2);
    }


    // translate button to center of screen
    trig.style.transform = 'translate(' + transX + 'px, ' + transY + 'px)';
    trig.style.webkitTransform = 'translate(' + transX + 'px, ' + transY + 'px)';
    // expand temporary div to the same size as the modal
    div.style.transform = 'scale(' + scaleX + ',' + scaleY + ')';
    div.style.webkitTransform = 'scale(' + scaleX + ',' + scaleY + ')';


    window.setTimeout(function() {
      window.requestAnimationFrame(function() {
        open(m, div);
      });
    }, contentDelay);

  };

  var open = function(m, div) {

    if (!isOpen) {
      // select the content inside the modal
      var content = m.querySelector('.modal__content');
      var activeLink = document.querySelector('.modal__trigger--active');
      var video = activeLink.dataset.src;
      // reveal the modal
      m.classList.add('modal--active');
      // reveal the modal content
       // <iframe class="video574" src="https://www.youtube.com/embed/'+video+'?autoplay=1;showinfo=0"></iframe>
      content.classList.add('modal__content--active');
      $('.video574').remove();
        $('.oleddmv1').append('  <iframe class="video574" width="560" height="315" src="https://www.youtube.com/embed/'+video+'?autoplay=1&amp;rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> ');
      /**
       * when the modal content is finished transitioning, fadeout the temporary
       * expanding div so when the window resizes it isn't visible ( it doesn't
       * move with the window).
       */

      content.addEventListener('transitionend', hideDiv, false);

      isOpen = true;
    }

    function hideDiv() {
      // fadeout div so that it can't be seen when the window is resized
      div.style.opacity = '0';
      content.removeEventListener('transitionend', hideDiv, false);
    }
  };

  var close = function(event) {

    event.preventDefault();
    event.stopImmediatePropagation();

    var target = event.target;
    var div = document.getElementById('modal__temp');

     $('.video574').remove();

    /**
     * make sure the modal__bg or modal__close was clicked, we don't want to be able to click
     * inside the modal and have it close.
     */

    if (isOpen && target.classList.contains('modal__bg') || target.classList.contains('modal__close')) {

      // make the hidden div visible again and remove the transforms so it scales back to its original size
      div.style.opacity = '1';
      div.removeAttribute('style');

      /**
       * iterate through the modals and modal contents and triggers to remove their active classes.
       * remove the inline css from the trigger to move it back into its original position.
       */

      for (var i = 0; i < len; i++) {
        modals[i].classList.remove('modal--active');
        content[i].classList.remove('modal__content--active');
        trigger[i].style.transform = 'none';
        trigger[i].style.webkitTransform = 'none';
        trigger[i].classList.remove('modal__trigger--active');
      }

      // when the temporary div is opacity:1 again, we want to remove it from the dom
      div.addEventListener('transitionend', removeDiv, false);

      isOpen = false;

    }

    function removeDiv() {
      setTimeout(function() {
        window.requestAnimationFrame(function() {
          // remove the temp div from the dom with a slight delay so the animation looks good
          div.remove();
        });
      }, contentDelay - 50);
    }

  };

  var bindActions = function() {
    for (var i = 0; i < len; i++) {
      trigger[i].addEventListener('click', getId, false);
      closers[i].addEventListener('click', close, false);
      modalsbg[i].addEventListener('click', close, false);
    }
  };

  var init = function() {
    bindActions();
  };

  return {
    init: init
  };

}());

Modal.init();
      
</script>

<script type=text/javascript>
	var digitalData = {};
	digitalData = {
		pageInfo: {
			pageName: 'ru:Телевизоры:SpecialProject:football',
			channel: 'ru:Телевизоры:SpecialProject:football',
			siteSection: 'ru:Телевизоры:SpecialProject:football',
			subSection: 'ru:Телевизоры:SpecialProject:football'
		},
		siteInfo: {
			siteCountryCode: 'ru'
		},
		globalInfo: {
			languageCode: 'ru'
		}
	};
</script>

<script type="text/javascript">_satellite.pageBottom();</script>
</body>
</html>