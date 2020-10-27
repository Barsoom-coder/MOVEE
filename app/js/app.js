
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
