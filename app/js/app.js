
// ================================= ADAPTIVE MENU ================================ 

document.addEventListener(
	"DOMContentLoaded", () => {
		new Mmenu("#my-menu", {
			// options
			extensions: ["position-right", "border-none", ],
			'load': true
		}, {
			// configuration
			// classNames: {
			// selected: "active"
			// }
		});
	}
);

// ================================================================================== 


// ============================ SECTION PRICE ADAPTIVE ===============================

$("#hideContent").click(function(){
	$(".hiddenBlock").slideUp(1000);
	$('#showContent').show();
	$('#hideContent').hide();
});

$("#showContent").click(function(){
	$(".hiddenBlock").slideDown("slow");
	$('#hideContent').show();
	$('#showContent').hide();
});


// ===================================================================================

// =========================== SECTION CARPARK SLIDER ================================

var swiper = new Swiper('.swiper-container', {
	cssMode: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	mousewheel: true,
	keyboard: true,
	loop: true,
	observer: true,
	observeParents: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}
});


$(".car-choice__button--1").click(function(e) {
  e.preventDefault();
  $(".carPark__slider").removeClass('active');
	$('.carPark__slider--1').addClass('active');
	$('.car-choice__button').removeClass('isactive');
	$(this).addClass('isactive');
});	

$(".car-choice__button--2").click(function(e) {
  e.preventDefault();
  $(".carPark__slider").removeClass('active');
	$('.carPark__slider--2').addClass('active');
	$('.car-choice__button').removeClass('isactive');
	$(this).addClass('isactive');
});

$(".car-choice__button--3").click(function(e) {
  e.preventDefault();
  $(".carPark__slider").removeClass('active');
	$('.carPark__slider--3').addClass('active');
	$('.car-choice__button').removeClass('isactive');
	$(this).addClass('isactive');
});

// ===================================================================================

// =========================== SECTION REVIEWS READ ALL ==============================

$(".reviews-block__readMoreButton--1").click(function(){
	$(".reviews-block__dots--1").hide();
	$('.reviews-block__readMore--1').show();
	$(".reviews-block__readMoreButton--1").hide();
});

$(".reviews-block__readMoreButton--2").click(function(){
	$(".reviews-block__dots--2").hide();
	$('.reviews-block__readMore--2').show();
	$(".reviews-block__readMoreButton--2").hide();
});

$(".reviews-block__readMoreButton--3").click(function(){
	$(".reviews-block__dots--3").hide();
	$('.reviews-block__readMore--3').show();
	$(".reviews-block__readMoreButton--3").hide();
});

// ===================================================================================
