$(document).ready(function() {
	let bottomSegment = $(".bottom-segment");
	let fill = $(".fill");
	let segment13Fill = $("#segment13 .top-fill");
	let segment15Fill = $("#segment15 .top-fill");
	let segment12Fill = $("#segment12 .top-fill");
	let segment14Fill = $("#segment14 .top-fill");

	let segment1 = $("#segment1");
	let segment2 = $("#segment2");
	let segment3 = $("#segment3");
	let segment5 = $("#segment5");
	let segment7Fill = $("#segment7 .fill")

	
	let currentPos = 0;
	$(window).scroll(function() {
			let distance = $(window).scrollTop();

			fill.height(distance/3);

			//scrolling down
			if (distance > currentPos) {
				if(segment1.width() > 70) {
					segment1.width(100-distance);
				}

				if(segment2.width() > 60) {
					segment2.width(100-distance);
				}

				if(segment3.width() > 15) {
					segment3.width(100-distance);
				}

				if(segment5.width() > 80) {
					segment5.width(100-distance);
				}

				if(segment7Fill.height() > 120) {
					segment13Fill.width(segment13Fill.width()+2);
					segment14Fill.width(segment14Fill.width()+4);
					segment15Fill.width(segment15Fill.width()+2);
				}

				if(segment7Fill.height() > 60) {
					segment12Fill.width(segment12Fill.width()+2);
				}

				//scrolling up
			} else {
				if(segment1.width() < 100) {
					segment1.width(segment1.width()+100/distance);
				}

				if(segment2.width() < 100) {
					segment2.width(segment2.width()+100/distance);
				}

				if(segment3.width() < 100) {
					segment3.width(segment3.width()+100/distance);
				}

				if(segment5.width() < 100) {
					segment5.width(segment5.width()+100/distance);
				}

				if(segment7Fill.height() < 120) {
					segment13Fill.width(segment13Fill.width()-8);
					segment14Fill.width(segment14Fill.width()-8);
					segment15Fill.width(segment15Fill.width()-8);
				}

				if(segment7Fill.height() < 80) {
					segment12Fill.width(segment12Fill.width()-8);
				}

				//reset horizontal lines if at top of screen
				if(distance == 0) {
					bottomSegment.width(100);
					segment12Fill.width(0);
					segment13Fill.width(0);
					segment14Fill.width(0);
					segment15Fill.width(0);
				}
			}
	

			currentPos = distance;

				
	});




});



