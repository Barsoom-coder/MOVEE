
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

let showContent = document.querySelector('#showContent');
let hideContent = document.querySelector('#hideContent');
let hiddenContents = document.querySelectorAll('.hiddenBlock');

showContent.addEventListener('click', function () {
	for (let content of hiddenContents) {
		content.style.display = 'flex';

	}

	showContent.style.display = 'none';
	hideContent.style.display = 'inline-block';
});

hideContent.addEventListener('click', function () {
	for (let content of hiddenContents) {
		content.style.display = 'none';
	}
	hideContent.style.display = 'none';
	showContent.style.display = 'inline-block';
});


// ===================================================================================