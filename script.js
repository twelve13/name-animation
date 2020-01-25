$(document).ready(function() {
	let fill = $(".fill");

	

	$(window).scroll(function() {
			let distance = $(window).scrollTop();
			fill.height(distance/3);
	});


});



