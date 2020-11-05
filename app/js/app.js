// ================================= ADAPTIVE MENU ================================ 

document.addEventListener(
	"DOMContentLoaded", () => {
		new Mmenu("#my-menu", {
			// options
			"slidingSubmenus": false,
			pageScroll: true,
			extensions: ["position-right", "border-none", "theme-dark"],
			// 'load': true
			// onClick : {
			// 	close          : true,
			// 	preventDefault : false,
			// }
		}, {
			// configuration
			// classNames: {
			// selected: "active"
			// }
			// onClick : {
			// 	close          : true,
			// 	preventDefault : false,
			// }
		});
	}
);

// ================================================================================== 


// ============================ SECTION PRICE ADAPTIVE ===============================

$("#hideContent").click(function () {
	$(".hiddenBlock").slideUp(1000);
	$('#showContent').show();
	$('#hideContent').hide();
});

$("#showContent").click(function () {
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


$(".car-choice__button--1").click(function (e) {
	e.preventDefault();
	$(".carPark__slider").removeClass('active');
	$('.carPark__slider--1').addClass('active');
	$('.car-choice__button').removeClass('isactive');
	$(this).addClass('isactive');
});

$(".car-choice__button--2").click(function (e) {
	e.preventDefault();
	$(".carPark__slider").removeClass('active');
	$('.carPark__slider--2').addClass('active');
	$('.car-choice__button').removeClass('isactive');
	$(this).addClass('isactive');
});

$(".car-choice__button--3").click(function (e) {
	e.preventDefault();
	$(".carPark__slider").removeClass('active');
	$('.carPark__slider--3').addClass('active');
	$('.car-choice__button').removeClass('isactive');
	$(this).addClass('isactive');
});

// ===================================================================================

// =========================== SECTION REVIEWS READ ALL ==============================

$(".reviews-block__readMoreButton--1").click(function () {
	$(".reviews-block__dots--1").hide();
	$('.reviews-block__readMore--1').show();
	$(".reviews-block__readMoreButton--1").hide();
});

$(".reviews-block__readMoreButton--2").click(function () {
	$(".reviews-block__dots--2").hide();
	$('.reviews-block__readMore--2').show();
	$(".reviews-block__readMoreButton--2").hide();
});

$(".reviews-block__readMoreButton--3").click(function () {
	$(".reviews-block__dots--3").hide();
	$('.reviews-block__readMore--3').show();
	$(".reviews-block__readMoreButton--3").hide();
});

// ===================================================================================

let map_container = document.getElementById('map_container');
let options_map = {
	once: true, //once start, thereafter destroy listener
	passive: true,
	capture: true
};
map_container.addEventListener('click', start_lazy_map, options_map);
map_container.addEventListener('mouseover', start_lazy_map, options_map);
map_container.addEventListener('touchstart', start_lazy_map, options_map);
map_container.addEventListener('touchmove', start_lazy_map, options_map);

let map_loaded = false;

function start_lazy_map() {
	if (!map_loaded) {
		let map_block = document.getElementById('ymap_lazy');
		map_loaded = true;
		map_block.setAttribute('src', map_block.getAttribute('data-src'));
		map_block.removeAttribute('data_src');
		console.log('loaded');
	}
}



$(document).ready(function () {
	// Добавить плавную прокрутку до всех ссылок
	$(".scroll").on('click', function (event) {

		// Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
		if (this.hash !== "") {
			// Запретить поведение щелчка якоря по умолчанию
			event.preventDefault();

			// Хранить хэш
			var hash = this.hash;

			// Использование метода animate() jQuery для добавления плавной прокрутки страницы
			// Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {

				// Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
				window.location.hash = hash;
			});
		} // Конец, если
	});
});



$(document).ready(function(){   
	$(window).scroll(function () {
			if ($(this).scrollTop() > 400) {
					$('#scroll-to-top').fadeIn();
			} else {
					$('#scroll-to-top').fadeOut();
			}
	});
	$('#scroll-to-top').click(function () {
			$('body,html').animate({
					scrollTop: 0
			}, 400);
			return false;
	});
});