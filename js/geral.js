$(function(){

	$("header button").click(function() {
		$("header nav").toggleClass("openNavMenu");
		$("body").toggleClass("travaScroll");
	});

});