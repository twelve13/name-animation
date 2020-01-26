$(document).ready(function() {
	let fill = $(".fill");
	let segment1 = $("#segment1");
	let segment2 = $("#segment2");
	let segment3 = $("#segment3");

	let segment5 = $("#segment5");

	
	let currentPos = 0;
	$(window).scroll(function() {
			let distance = $(window).scrollTop();

			fill.height(distance/3);
			//stop at 70px;


			if (distance > currentPos) {
				if(segment1.width() > 70) {
					segment1.width(100-distance);
				}
			} else {
				if(segment1.width() < 100) {
					segment1.width(segment1.width()+100/distance);
				}

				if(distance == 0) {
					segment1.width(100);
				}
			}

			if (distance > currentPos) {
				if(segment2.width() > 60) {
					segment2.width(100-distance);
				}
			} else {
				if(segment2.width() < 100) {
					segment2.width(segment2.width()+100/distance);
				}

				if(distance == 0) {
					segment2.width(100);
				}
			}

			if (distance > currentPos) {
				if(segment3.width() > 15) {
					segment3.width(100-distance);
				}
			} else {
				if(segment3.width() < 100) {
					segment3.width(segment3.width()+100/distance);
				}

				if(distance == 0) {
					segment3.width(100);
				}
			}


			if (distance > currentPos) {
				if(segment5.width() > 80) {
					segment5.width(100-distance);
				}
			} else {
				if(segment5.width() < 100) {
					segment5.width(segment5.width()+100/distance);
				}

				if(distance == 0) {
					segment5.width(100);
				}
			}

	

			currentPos = distance;

				
	});




});



