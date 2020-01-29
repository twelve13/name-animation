$(document).ready(function() {
	let bottomSegment = $(".bottom-segment");
	let topFill = $(".top-fill");
	let fill = $(".fill");
	let segment13Fill = $("#segment13 .top-fill");
	let segment15Fill = $("#segment15 .top-fill");
	let segment12Fill = $("#segment12 .top-fill");
	let segment14Fill = $("#segment14 .top-fill");

	let segment1 = $("#segment1");
	let segment2 = $("#segment2");
	let segment3 = $("#segment3");
	let segment5 = $("#segment5");

	
	let currentPos = 0;
	let startingDistance = $(window).scrollTop();

	
	fill.height(startingDistance/3);

	bottomSegment.width(100-startingDistance);

	if(startingDistance > 350) {
		segment13Fill.width((.2*startingDistance)-55);
		segment14Fill.width((.75*startingDistance)-230);
		segment15Fill.width((.2*startingDistance)-55);
	}

	if(startingDistance > 190) {
		segment12Fill.width((.25*startingDistance)-25);
	}

	segment1.width(70+(250/startingDistance));

	segment2.width(60+(250/startingDistance));

	segment3.width(15+(250/startingDistance));

	segment5.width(80+(250/startingDistance));



	$(window).scroll(function() {
			let distance = $(window).scrollTop();

			fill.height(distance/3);

			//scrolling down
			if (distance > currentPos) {
				
				bottomSegment.width(100-distance);

				if(distance > 350) {
					segment13Fill.width((.2*distance)-55);
					segment14Fill.width((.75*distance)-230);
					segment15Fill.width((.2*distance)-55);
				}

				if(distance > 190) {
					segment12Fill.width((.25*distance)-25);
				}

				//scrolling up
			} else {
				
					segment1.width(70+(250/distance));

					segment2.width(60+(250/distance));

					segment3.width(15+(250/distance));

					segment5.width(80+(250/distance));
				

				if(distance < 350) {
					segment13Fill.width(segment13Fill.width()-8);
					segment14Fill.width(segment14Fill.width()-8);
					segment15Fill.width(segment15Fill.width()-8);
				}

				if(distance < 190) {
					segment12Fill.width(segment12Fill.width()-8);
				}

				//reset horizontal lines if at top of screen
				if(distance == 0) {
					bottomSegment.width(100);
					topFill.width(0);
				}
			}

			currentPos = distance;
				
	});




});



