document.addEventListener("DOMContentLoaded", function (e) {
	// ============================ ADAPTIVE MENU =========================================

	let menuButton = document.querySelector('.menu-btn');
	let menu = document.querySelector('.top-menu--mobile');
	let menuLink = document.querySelectorAll('.top-menu__item--mobile');
	let menuOverlay = document.querySelector('.header__menu-overlay');
	let body = document.querySelector("body");

	let unlock = true;

	menuOverlay.addEventListener('click', () => {
		if (menuButton.classList.contains('active')) {
			body_lock();
			menu.classList.toggle('active');
			menuOverlay.classList.remove('active');
			menuButton.classList.remove('active');
		}
	});

	menuButton.addEventListener('click', () => {
		body_lock();
		menu.classList.toggle('active');
		menuOverlay.classList.toggle('active');
		menuButton.classList.toggle('active');
	});

	for (let link of menuLink) {
		link.addEventListener('click', () => {
			body_lock();
			if (menuButton.classList.contains('active')) {
				menu.classList.toggle('active');
				menuOverlay.classList.remove('active');
				menuButton.classList.remove('active');
			}
		});
	}
	// BodyLock
	function body_lock() {
		if (body.classList.contains('lock')) {
			body_lock_remove();
		} else {
			body_lock_add();
		}
	}

	function body_lock_remove() {
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
	const mediaQuery = window.matchMedia('(max-width: 701px)');
	let cardsParent = document.querySelector('.price__main-content');
	let cards = cardsParent.querySelectorAll('.price__card-box');
	let mainContainer = document.querySelector('.price__main-content');
	let hiddenContainer = document.createElement('div');
	hiddenContainer.classList = '.card-box__hidden-container';
	let exist = false;


	function handleTabletChange(e) {
		if (e.matches) {
			if (exist == false) {
				cards[0].firstElementChild.insertAdjacentHTML('beforeend', '<button class="card-box__more">Все цены</button>');
				cards[cards.length - 1].firstElementChild.insertAdjacentHTML('beforeend', '<button class="card-box__more card-box__more--close">Скрыть</button>');
				exist = true;
			}
			let btnMore = document.querySelector('.card-box__more');
			let btnMoreClose = document.querySelector('.card-box__more--close');
			btnMore.onclick = () => {
				slideDown(hiddenContainer);
				btnMore.style.display = 'none';
			};
			btnMoreClose.onclick = () => {
				slideUp(hiddenContainer);
				btnMore.style.display = 'flex';
			};

			for (i = 1; i < cards.length; i++) {
				let card = cards[i];
				mainContainer.appendChild(hiddenContainer);
				hiddenContainer.appendChild(card);
			}
			hiddenContainer.style.display = 'none';

		} else if (e.matches == false) {
			btnMore = document.querySelector('.card-box__more');
			btnMoreClose = document.querySelector('.card-box__more--close');
			if (exist) {
				btnMore.remove();
				btnMoreClose.remove();
				exist = false;
			}
			for (i = 1; i < cards.length; i++) {
				card = cards[i];
				mainContainer.appendChild(card);
			}
			hiddenContainer.remove();
		}
	}
	mediaQuery.addListener(handleTabletChange);
	handleTabletChange(mediaQuery);

	let slideUp = (target, duration = 700) => {
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.style.display = 'none';
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('slide');
		}, duration);
	};

	let slideDown = (target, duration = 700) => {
		target.style.removeProperty('display');
		let display = window.getComputedStyle(target).display;
		if (display === 'none')
			display = 'flex';

		target.style.display = display;
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('slide');
		}, duration);
	};

	// ===================================================================================

	// =========================== SECTION CARPARK SLIDER ================================

	function Tabs(e) {
		var bindAll = function (e) {
			var menuElements = document.querySelectorAll('[data-tab]');
			for (var i = 0; i < menuElements.length; i++) {
				menuElements[i].addEventListener('click', change, false);
			}
		}

		var clear = function () {
			var menuElements = document.querySelectorAll('[data-tab]');
			for (var i = 0; i < menuElements.length; i++) {
				menuElements[i].classList.remove('active');
				var id = menuElements[i].getAttribute('data-tab');
				document.getElementById(id).classList.remove('active');
			}
		}

		var change = function (e) {
			clear();
			e.target.classList.add('active');
			var id = e.currentTarget.getAttribute('data-tab');
			document.getElementById(id).classList.add('active');
		}

		bindAll();
	}

	var connectTabs = new Tabs();

	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		keyboard: true,
		lazy: true,
		speed: 400,
		loop: true,
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
		observeSlideChildren: true,
	});

	// ===================================================================================

	// =========================== SECTION REVIEWS READ ALL ==============================

	let texts = document.querySelectorAll('.reviews-box__par');
	let buttons = document.querySelectorAll('.reviews-box__btn-readall');

	for (let i = 0; i < texts.length; i++) {
		let lastSpace;
		let limit = 300;
		let string1 = texts[i].innerHTML;
		string1 = string1.trim();
		let stringMore = string1.slice(0, limit);
		lastSpace = stringMore.lastIndexOf(" ");
		if (lastSpace > 0) {
			stringMore = stringMore.substr(0, lastSpace);
		}
		limitStringMore = stringMore.length;
		let substring = string1.slice(limitStringMore);
		let span = document.createElement('span');
		span.innerHTML = substring;
		span.classList = 'hidden-text';
		span.style.display = 'none';

		if (string1.length <= limit) return string1;
		string1 = string1.slice(0, limit);
		lastSpace = string1.lastIndexOf(" ");
		if (lastSpace > 0) {
			string1 = string1.substr(0, lastSpace);
		}
		texts[i].innerHTML = string1;
		let dots = document.createElement('span');
		dots.classList = 'dots';
		dots.innerHTML = '...';
		texts[i].appendChild(dots);
		texts[i].appendChild(span);
	}





	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function () {
			if (this.previousElementSibling.firstElementChild.style.display == 'none' && this.previousElementSibling.lastElementChild.style.display == 'inline') {
				this.previousElementSibling.firstElementChild.style.display = 'inline';
				this.previousElementSibling.lastElementChild.style.display = 'none';
				this.innerHTML = 'Читать полностью';
			} else {
				this.previousElementSibling.firstElementChild.style.display = 'none';
				this.previousElementSibling.lastElementChild.style.display = 'inline';
				this.innerHTML = 'Скрыть';
			}
		});
	}

	// ===================================================================================



	// ================================ SCROLL ===========================================

	const anchors = document.querySelectorAll('.scroll');
	let anchorsMmenu = document.querySelectorAll('.scroll-mobile');

	for (let anchor of anchorsMmenu) {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
			setTimeout(() => {
				document.querySelector(goto).scrollIntoView({
					behavior: "smooth",
					block: "start"
				});
			}, 700);
		});
	}

	for (let anchor of anchors) {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
			document.querySelector(goto).scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		});
	}

	var sttElem = document.querySelector('.scroll-to-top');
	var screanHeight = window.innerHeight;

	var sttScroll = function sttScroll() {
		document.addEventListener('scroll', function (e) {
			if (screanHeight <= window.scrollY) {
				sttElem.classList.add('scroll-to-top__active');
			} else if (e.target.scrollingElement.scrollTop <= screanHeight) {
				sttElem.classList.remove('scroll-to-top__active');
				sttElem.style.pointerEvents = 'auto';
			}
		});
	};

	var sttClick = function sttClick() {
		sttElem.addEventListener('click', function () {
			var docHeight = window.scrollY;
			var progress = 0;
			var position = docHeight;
			var speed = 5;

			sttElem.style.pointerEvents = 'none';

			var sttAnim = function sttAnim() {
				progress += 1;
				position -= progress * speed;
				window.scrollTo(0, position);

				if (position > 0) {
					requestAnimationFrame(sttAnim);
				}
			};

			requestAnimationFrame(sttAnim);
		});
	};

	var sttFunc = function sttFunc() {
		sttScroll();
		sttClick();
	};

	sttFunc();
	// ==================================================================================

	// ============================= POPUPS =============================================

	// Swal.fire({
	// 	title: 'Error!',
	// 	text: 'Do you want to continue',
	// 	icon: 'error',
	// 	customClass: {
	// 		content: '.modal-form',
	// 	},
	// 	confirmButtonText: 'Cool'
	// });

	//Variables
	let modal = document.querySelector('.modal');
	let modalButtons = document.querySelectorAll('.modal-btn');
	let modalCloseBtn = document.querySelector('.modal__close');

	for (let i = 0; i < modalButtons.length; i++) {
		let button = modalButtons[i];
		button.addEventListener('click', () => {
			openModal(button);
			e.preventDefault();
		});
	}

	function openModal(e) {
		modal.classList.add('is-open');
		body_lock();
	}

	function closeModal(e) {
		if (!e.target.closest('.modal__content') || e.target.closest('.modal__close')) {
			modal.classList.remove('is-open');
			body_lock();
		}
	}

	modalCloseBtn.addEventListener('click', closeModal);
	modal.addEventListener('click', closeModal);


	var selector = document.querySelectorAll("input[type=tel]");
	var im = new Inputmask("+7 (999) 999-99-99");
	im.mask(selector);

	let forms = document.querySelectorAll('.validate-form');
	let names = document.querySelectorAll('.validate-name');
	let phones = document.querySelectorAll('.validate-phone');
	let checkboxes = document.querySelectorAll('.validate-checkbox');
	// let sumbitBtn = document

	for (let i = 0; i < forms.length; i++) {
		let form = forms[i];
		form.addEventListener('submit', e => {
			e.preventDefault();

			checkInputs();
		});
	}


	function checkInputs() {

		for (let i = 0; i < names.length; i++) {
			let name = names[i];
			let nameValue = name.value.trim();
			if (nameValue === '') {
				setErrorFor(name, 'Введите имя');
			} else {
				setSuccessFor(name);
			}
		}

		for (let i = 0; i < phones.length; i++) {
			let phone = phones[i];
			let phoneValue = phone.value.trim();
			let reg = /^([+]?[0-9\s-\(\)]{3,25})*$/i;

			if (!reg.test(phoneValue)) {
				setErrorFor(phone, 'Некорректный номер');
			} else if (phoneValue === '') {
				setErrorFor(phone, 'Введите номер телефона');
			} else {
				setSuccessFor(phone);
			}
		}

		for (let i = 0; i < checkboxes.length; i++) {
			let checkbox = checkboxes[i];
			if (checkbox.checked === false) {
				setErrorFor(checkbox, 'Обязательное поле');
			} else {
				setSuccessFor(checkbox);
			}
		}



	function setErrorFor(input, message) {
		let formControl = input.parentElement;
		let small = formControl.querySelector('small');
		formControl.classList.add('error');
		small.innerText = message;
	}

	function setSuccessFor(input) {
		let formControl = input.parentElement;
		formControl.classList.add('success');
		formControl.classList.remove('error');
	}
}

// LAZY LOAD FOR MAP
	let ok = false;
	window.addEventListener('scroll', function () {
	if (ok === false) {
		ok = true;
		setTimeout(() => {
			let script = document.createElement('script');
			script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1ceb2aa9d0dd819a707c93ffdaafc3d0a63ac3feb80ba72a73ebc9b352613fb0&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=true";
			document.getElementById('yamap').replaceWith(script);
		}, 1000);
	}
});

});

//========================================================================================================================================================