$(document).ready(function () {
	// ============================ ADAPTIVE MENU =========================================
	
	let menuButton = document.querySelector('.menu-btn');
	let menu = document.querySelector('.top-menu');
	let menuLink = document.querySelectorAll('.top-menu__item');
	let menuOverlay = document.querySelector('.header__menu-overlay');
	let body = document.querySelector("body");

	// onclick="this.classList.toggle('menu-btn--active');this.setAttribute('aria-expanded', this.classList.contains('menu-btn--active'))
	let unlock = true;
	// let delay = 500;

	menuOverlay.addEventListener('click', () => {
		if (menuButton.classList.contains('menu-btn--active')) {
			body_lock();
			menu.classList.toggle('top-menu--active');
			menuOverlay.classList.remove('header__menu-overlay--active');
			menuButton.classList.remove('menu-btn--active');
		}
	});
	
	menuButton.addEventListener('click', () => {
			body_lock();
			menu.classList.toggle('top-menu--active');
			menuOverlay.classList.toggle('header__menu-overlay--active');
			menuButton.classList.toggle('menu-btn--active');
	});

	for (let link of menuLink) {
		link.addEventListener('click', () => {
			body_lock();
			if (menuButton.classList.contains('menu-btn--active')) {
				menu.classList.toggle('top-menu--active');
				menuOverlay.classList.remove('header__menu-overlay--active');
				menuButton.classList.remove('menu-btn--active');
			}
		});
	}
	// BodyLock
function body_lock() {
	// let body = document.querySelector("body");
	if (body.classList.contains('lock')) {
		body_lock_remove();
	} else {
		body_lock_add();
	}
}
function body_lock_remove() {
	// let body = document.querySelector("body");
	if (unlock) {
		setTimeout(() => {
			body.style.paddingRight = '0px';
			body.classList.remove("lock");
		}, );

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, );
	}
}
function body_lock_add() {
	// let body = document.querySelector("body");
	if (unlock) {
			body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
			body.classList.add("lock");
		}
		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, );
	}

	// ===================================================================================

	// ============================ SECTION PRICE ADAPTIVE ===============================

	$("#hideContent").click(function () {
		$(".hiddenBlock").slideUp(1000);
		$('#showContent').show();
		$('#hideContent').hide();
	});

	$("#showContent").click(function () {
		$(".hiddenBlock").slideDown("swing");
		$('#hideContent').show();
		$('#showContent').hide();
	});


	// ===================================================================================

	// =========================== SECTION CARPARK SLIDER ================================

	$(".tab").on("click", function (e) {
		e.preventDefault();
		$($(this).siblings()).removeClass("tab--active");
		$($(this).closest('.tabs-wrapper').siblings().find("div")).removeClass("tabs-content--active");
		$(this).addClass("tab--active");
		$($(this).attr("href")).addClass("tabs-content--active");
	});


	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		// freeMode: true,
		keyboard: true,
		loop: true,
		speed: 400,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		observer: true,
		observeParents: true,

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



	// ================================ SCROLL ===========================================

	$(".scroll").on("click", function(e){
		var anchor = $(this);
		setTimeout(function () {
			$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top
			}, 750);
		}, 600);
			e.preventDefault();
		});
	
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
	// ==================================================================================

	// ============================= POPUPS =============================================

	$('.inline-popups').magnificPopup({
		delegate: 'a',
		removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
			open: function () { // When you open the
				$('body').css('overflow', 'hidden'); // window, the element
			}, // "body" is used "overflow: hidden".

			close: function () { // When the window
				$('body').css('overflow', ''); // is closed, the 
			}, // "overflow" gets the initial value.

		},

		midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	});



	var selector = document.querySelectorAll("input[type=tel]");

	var im = new Inputmask("+7 (999) 999-99-99");
	im.mask(selector);


	// validate

	function validateForms(selector, rules, ) {
		new window.JustValidate(selector, {
			rules: rules,
			submitHandler: function (form, values, ajax) {
				console.log(form);

				let formData = new FormData(form);

				fetch("mail.php", {
						method: "POST",
						body: formData
					})
					.then(function (data) {
						console.log('Отправлено');
						form.reset();
						$.magnificPopup.close();

						setTimeout(function () {
							$.magnificPopup.open({
								items: {
									src: '#callback-ok',
									removalDelay: 300,
								},
								closeBtnInside: true,
								type: 'inline',
								mainClass: 'mfp-zoom-in'
							});
						}, 500);
					});
				return false;
			}
		});
	}

	validateForms('.validate-header', {
			email: {
				required: true,
				email: true
			},
			fio: {
				required: true
			},
			phone: {
				required: true,
				strength: {
					custom: '[^_]$'
				}
			},
			checkbox: {
				required: true
			}
		},

	);

	validateForms('.validate-footer', {
		email: {
			required: true,
			email: true
		},
		fio: {
			required: true
		},
		phone: {
			required: true,
			strength: {
				custom: '[^_]$'
			}
		},
		checkbox: {
			required: true
		}
	});

	validateForms('.validate-slider', {
		email: {
			required: true,
			email: true
		},
		fio: {
			required: true
		},
		phone: {
			required: true,
			strength: {
				custom: '[^_]$'
			}
		},
		checkbox: {
			required: true
		}
	});

	validateForms('.validate-price', {
		email: {
			required: true,
			email: true
		},
		fio: {
			required: true
		},
		phone: {
			required: true,
			strength: {
				custom: '[^_]$'
			}
		},
		checkbox: {
			required: true
		}
	});

	validateForms('.validate-order', {
		email: {
			required: true,
			email: true
		},
		fio: {
			required: true
		},
		phone: {
			required: true,
			strength: {
				custom: '[^_]$'
			}
		},
		checkbox: {
			required: true
		}
	});

	// lazy load
	$(function () {
		$('.lazy').lazy();
	});

	document.addEventListener('touchstart', {
		passive: true
	});


	// ================================================================================== 

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
});

//========================================================================================================================================================