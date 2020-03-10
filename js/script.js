$(document).ready(function(){
	if ($(document).scrollTop() > 370){
		$(".navbar").addClass("navbar-background");
	}
	else {
		$(".navbar").removeClass("navbar-background");
	}

	$(window).scroll(function() {
		if($(document).scrollTop() > 370) {
			$(".navbar").addClass("navbar-transition");
			$(".navbar").addClass("navbar-background");
		}
		else {
			$(".navbar").removeClass("navbar-background");
		}
	});

	$('.navbar-toggle').on("click",function(){
		$('.navbar-toggle').toggleClass("nyoba");
	});

	$('.link-transition').on("click",function(){
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 500, 'swing');
	});
});
