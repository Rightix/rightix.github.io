"use strict";$(document).ready(function(){function e(e){return e.preventDefault(),e.stopPropagation(),!1}svg4everybody(),$(".main-slider").owlCarousel({items:3,dots:!1,nav:!1,center:!0,margin:0,loop:!0,dragEndSpeed:1500,fluidSpeed:1500,smartSpeed:1500,navSpeed:1500,autoWidth:!0,responsive:{0:{items:1,autoWidth:!1,center:!1,smartSpeed:800,navSpeed:800,dragEndSpeed:800,fluidSpeed:800},992:{}}}),$(".news-slider").owlCarousel({items:1,dots:!1,nav:!1,margin:0,responsive:{0:{margin:10,stagePadding:20,items:1},420:{margin:15,stagePadding:20,autoWidth:!0},768:{margin:15,stagePadding:0,autoWidth:!1},1320:{stagePadding:7,margin:14,autoWidth:!1,items:1}}}),$(".smi-slider").owlCarousel({dots:!1,nav:!1,margin:14,autoplayHoverPause:!0,autoplayTimeout:5e3,smartSpeed:1500,onDrag:e,onDragged:e,responsive:{0:{items:1,smartSpeed:800,center:!1,margin:14,autoplay:!1,autoWidth:!0},992:{items:2,autoplay:!1,center:!1,autoWidth:!0},1320:{items:4,center:!1,autoplay:!1,autoWidth:!0}}}),$(".book-detail-image").owlCarousel({items:1,dots:!1,nav:!0}),new ClipboardJS("#copyUrl",{text:function(){return document.location.href}}),$("#printPage").on("click",function(){return window.print()}),$(".password-toggle").on("click",function(){var e=$(".password-input");"password"==e.attr("type")?e.attr("type","text"):e.attr("type","password")}),$(".openLogin").on("click",function(){return $.fancybox.close(),$.fancybox.open({src:"#signIn"}),!1}),$(".openReg").on("click",function(){return $.fancybox.close(),$.fancybox.open({src:"#signUp"}),!1}),$(".open_password").on("click",function(){return $.fancybox.close(),$.fancybox.open({src:"#forgotPassword"}),!1}),$(".books-slider").owlCarousel({items:4,dots:!1,nav:!1,margin:14,responsive:{0:{items:1,autoWidth:!0},992:{items:3,autoWidth:!0,center:!1},1320:{items:4,center:!1,autoWidth:!1}}}),$(".mediaprojects-slider").owlCarousel({items:3,dots:!1,nav:!1,margin:14,responsive:{0:{items:1,autoWidth:!0},992:{items:1,autoWidth:!0,center:!1},1320:{items:3,autoWidth:!1,center:!1}}}),$(".content-slider").owlCarousel({dots:!1,nav:!1,items:3,margin:26,autoWidth:!0,responsive:{0:{items:1,stagePadding:20,autoWidth:!1,margin:10},726:{items:2},992:{items:2,autoWidth:!0},1320:{items:3,autoWidth:!0}}}),$(".articles-slider").owlCarousel({dots:!1,nav:!1,margin:12,responsive:{0:{items:1,stagePadding:20,autoWidth:!0},768:{items:2,autoWidth:!0},992:{items:2,autoWidth:!1},1320:{items:3,autoWidth:!1}}}),$(".smi-articles-slider-big").owlCarousel({dots:!1,nav:!1,margin:15,responsive:{0:{items:1,stagePadding:20,autoWidth:!1},500:{items:2,autoWidth:!0},992:{items:2,autoWidth:!1},1320:{items:3,autoWidth:!1}}}),$(".smi-articles-slider-small").owlCarousel({dots:!1,nav:!1,margin:15,responsive:{0:{items:1,stagePadding:20,autoWidth:!1},500:{items:2,autoWidth:!1},992:{items:2,autoWidth:!1},1320:{items:3,autoWidth:!1}}}),$(".smi-slider").on("click",".smi-slider__item",function(e){var t=$(this).find("img").attr("src"),i=$(this).attr("href"),s=$(this).attr("smi-caption"),n=$(this).attr("button-caption"),a=$(this).attr("smi-background");return $.fancybox.open('\n            <div class="subSmi-wrapper">\n            <div class="subSmi">\n                <div class="subSmi__image">\n                    <img src="'.concat(t,'" alt="">\n                </div>\n                <div class="subSmi__text">\n                    <div class="subSmi__caption">').concat(s,'</div>\n                     <a href="').concat(i,'" style="background: ').concat(a,'" class="subSmi__button">').concat(n,"</a>\n                </div>\n             </div>\n             </div>")),!1}),$(window).width()<1320&&($(".burger-menu").on("click",function(){$(this).parent(".main-menu-row")&&($(this).toggleClass("active"),$(".main-menu").toggleClass("active"))}),$(".submenu-burger").on("click",function(){$(this).toggleClass("active"),$(".submenu-links").toggleClass("active")}),$(".lang-picker-wrapper").on("click",function(){$(this).toggleClass("active"),$(".lang-picker.mobile").toggleClass("active")}),$(".mobile-filter").on("click",function(){$(".mobile-filter-body").toggleClass("active"),$(".mobile-filter").toggleClass("active")})),$(".header-lang--mobile").on("click",function(){$(this).find(".header-lang-menu").fadeIn()}).on("click",".header-lang--mobile",function(e){e.stopPropagation()}),$(document).click(function(e){var t=$(".header-lang--mobile");t.is(e.target)||0!==t.has(e.target).length||$(".header-lang-menu").fadeOut()}),$(window).width()<1320&&($(".products-row").owlCarousel({items:4,responsive:{992:{items:4},768:{items:3},600:{items:2},0:{items:1}}}),$(".category-adv").owlCarousel({items:4,responsive:{992:{items:4},768:{items:3},600:{items:2},0:{items:1}}})),$(".form__file input[type=file]").change(function(){var e=$(this).val().replace(/.*\\/,"");console.log(e),$(this).siblings(".form__file-name").fadeIn().val(e)}),$(function(){$("form .phone-input").mask("+9 (999) 999-99-99")});var t=$(".lesson-body__prev"),i=$(".lesson-body__next"),s=($(".lesson-body-card-wrapper"),$(".lesson-body-card-wrapper.active")),n=$(".lesson-body-counter__number .current"),a=1,o=$(".lesson-body-card-wrapper").length;function r(e){if("minus"===e){if(1===a)return!1;--a}if("plus"===e){if(a===o)return!1;a+=1}n.html(a)}i.on("click",function(e){if(e.preventDefault(),0===s.next().length)return!1;s.removeClass("active"),(s=s.next()).addClass("active"),r("plus")}),t.on("click",function(e){if(e.preventDefault(),0===s.prev().length)return!1;s.removeClass("active"),(s=s.prev()).addClass("active"),r("minus")}),$("select").selectric({})});