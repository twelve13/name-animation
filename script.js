$(document).ready(function() {
	let fill = $(".fill");
	let segment13Fill = $("#segment13 .top-fill");
	let segment15Fill = $("#segment15 .top-fill");
	let segment12Fill = $("#segment12 .top-fill");
	let segment14Fill = $("#segment14 .top-fill");

	let segment1 = $("#segment1");
	let segment2 = $("#segment2");
	let segment3 = $("#segment3");

	let segment5 = $("#segment5");
	let segment7 = $("#segment7 .fill")

	
	let currentPos = 0;
	$(window).scroll(function() {
			let distance = $(window).scrollTop();

			fill.height(distance/3);


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

			if (distance > currentPos) {
				if(segment7.height() > 120) {
					segment13Fill.width(segment13Fill.width()+2);
				}
			} else {
				if(segment7.height() < 120) {
					segment13Fill.width(segment13Fill.width()-8);
				}

				if(distance == 0) {
					segment13Fill.width(0);
				}
			}

			if (distance > currentPos) {
				if(segment7.height() > 120) {
					segment15Fill.width(segment15Fill.width()+2);
				}
			} else {
				if(segment7.height() < 120) {
					segment15Fill.width(segment15Fill.width()-8);
				}

				if(distance == 0) {
					segment15Fill.width(0);
				}
			}


			if (distance > currentPos) {
				if(segment7.height() > 60) {
					segment12Fill.width(segment12Fill.width()+2);
				}
			} else {
				if(segment7.height() < 80) {
					segment12Fill.width(segment12Fill.width()-8);
				}

				if(distance == 0) {
					segment12Fill.width(0);
				}
			}


			if (distance > currentPos) {
				if(segment7.height() > 120) {
					segment14Fill.width(segment14Fill.width()+4);
				}
			} else {
				if(segment7.height() < 120) {
					segment14Fill.width(segment14Fill.width()-8);
				}

				if(distance == 0) {
					segment14Fill.width(0);
				}
			}
	

			currentPos = distance;

				
	});




});



