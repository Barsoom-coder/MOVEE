

	document.addEventListener(
		"DOMContentLoaded", () => {
			new Mmenu("#my-menu", {
				// options
				"slidingSubmenus": false,
				pageScroll: true,
				extensions: ["position-right", "border-none", "theme-dark"],
			}, {
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
	
	
	
	
	
	$(document).ready(function () {
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
	
						setTimeout(function(){
							$.magnificPopup.open({
								items: {
									src: '#callback-ok',
									removalDelay: 300,
								},
								closeBtnInside: true,
								type: 'inline',
								mainClass:'mfp-zoom-in'
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

