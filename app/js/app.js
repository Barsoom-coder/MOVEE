
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

var swiper = new Swiper('.swiper-container', {
	cssMode: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	mousewheel: true,
	keyboard: true,
	observer: true,
	observeParents: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {} 

  
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